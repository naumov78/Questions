# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  body       :string           not null
#  views      :integer
#  rating     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
