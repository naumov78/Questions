# == Schema Information
#
# Table name: user_watched_questions
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  question_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class UserWatchedQuestion < ActiveRecord::Base

  belongs_to :watched_user,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id

  belongs_to :watched_question,
  class_name: "Question",
  foreign_key: :question_id,
  primary_key: :id

end
