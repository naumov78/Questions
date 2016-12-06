# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  first_name        :string           not null
#  last_name         :string           not null
#  email             :string           not null
#  description       :string
#  password_digest   :string           not null
#  session_token     :string           not null
#  asked_questions   :string           default([]), not null, is an Array
#  answers           :string           default([]), not null, is an Array
#  subscribed_topics :string           default([]), not null, is an Array
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
