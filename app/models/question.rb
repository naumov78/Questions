# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  body       :string           not null
#  views      :integer          default(0)
#  rating     :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ActiveRecord::Base

  validates :author_id, :body, presence: true

  belongs_to :topic,
  class_name: "Topic",
  foreign_key: :topic_id,
  primary_key: :id


  belongs_to :user,
  class_name: "User",
  foreign_key: :author_id,
  primary_key: :id


end
