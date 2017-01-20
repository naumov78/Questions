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

require 'test_helper'

class UserLikedAnswerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
