# == Schema Information
#
# Table name: user_liked_questions
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  question_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class UserLikedQuestion < ActiveRecord::Base

  belongs_to :liked_user,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id

  belongs_to :liked_question,
  class_name: "Question",
  foreign_key: :question_id,
  primary_key: :id


end
