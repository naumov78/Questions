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

require 'test_helper'

class UserLikedCommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
