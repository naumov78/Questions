# == Schema Information
#
# Table name: users
#
#  id                   :integer          not null, primary key
#  first_name           :string           not null
#  last_name            :string           not null
#  email                :string           not null
#  description          :string
#  password_digest      :string           not null
#  session_token        :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  userpic_file_name    :string
#  userpic_content_type :string
#  userpic_file_size    :integer
#  userpic_updated_at   :datetime
#

class User < ActiveRecord::Base

  VALID_EMAIL_REGEX = /\A[\w+\-._]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :first_name, :last_name, presence: true, length: { maximum: 40 }
  validates :email, presence: true, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 5 }, allow_nil: true
  validates :password_digest, presence: true
  validates :session_token, uniqueness: true, presence: true

  has_attached_file :userpic, default_url: "missing-userpic.png"
  validates_attachment_content_type :userpic, content_type: /\Aimage\/.*\Z/

  has_many :user_subscribed_topics, inverse_of: :user
  has_many :topics, through: :user_subscribed_topics

  has_many :questions,
  class_name: "Question",
  primary_key: :id,
  foreign_key: :author_id

  has_many :answers,
  class_name: "Answer",
  primary_key: :id,
  foreign_key: :author_id

  has_many :user_liked_questions, inverse_of: :user
  has_many :liked_questions, through: :user_liked_questions

  has_many :user_liked_answers, inverse_of: :user
  has_many :liked_answers, through: :user_liked_answers

  has_many :comments,
  class_name: "Comment",
  primary_key: :id,
  foreign_key: :author_id

  has_many :user_liked_comments
  has_many :liked_comments, through: :user_liked_comments

  has_many :in_follows,
  class_name: "Follow",
  foreign_key: :followee_id

  has_many :out_follows,
  class_name: "Follow",
  foreign_key: :follower_id

  has_many :followers, through: :in_follows, source: :follower
  has_many :followees, through: :out_follows, source: :followee


  has_many :user_watched_questions, inverse_of: :user
  has_many :watched_questions, through: :user_watched_questions


# , inverse_of: :user
  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.matches_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def matches_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    token = SecureRandom.urlsafe_base64(16)
    return token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def follows?(user)
    out_follows.exists?(followee_id: user.id)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end


end
