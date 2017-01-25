# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  author_id   :integer          not null
#  body        :string           not null
#  views       :integer          default(0)
#  rating      :integer          default(0)
#  created_at  :datetime
#  updated_at  :datetime
#

class Answer < ActiveRecord::Base

  validates :question_id, :author_id, :body, presence: true

  belongs_to :question,
  class_name: "Question",
  foreign_key: :question_id,
  primary_key: :id

  belongs_to :user,
  class_name: "User",
  foreign_key: :author_id,
  primary_key: :id

  has_many :user_liked_answers, inverse_of: :answer
  has_many :liked_users, through: :user_liked_answers

  has_many :comments

end
