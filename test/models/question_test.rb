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
#  topic_id   :integer          not null
#

require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
