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
#

require 'test_helper'

class AnswerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
