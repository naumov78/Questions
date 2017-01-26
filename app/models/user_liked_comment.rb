# == Schema Information
#
# Table name: user_liked_comments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  comment_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserLikedComment < ActiveRecord::Base

  belongs_to :liked_user,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id

  belongs_to :liked_comment,
  class_name: "Comment",
  foreign_key: :comment_id,
  primary_key: :id

end
