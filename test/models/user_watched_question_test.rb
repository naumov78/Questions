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

require 'test_helper'

class UserWatchedQuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
