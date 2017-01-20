# == Schema Information
#
# Table name: user_liked_answers
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  answer_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserLikedAnswer < ActiveRecord::Base

  belongs_to :liked_user,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id

  belongs_to :liked_answer,
  class_name: "Answer",
  foreign_key: :answer_id,
  primary_key: :id

end
