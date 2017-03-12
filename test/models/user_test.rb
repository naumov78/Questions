# == Schema Information
#
# Table name: users
#
#  id                   :integer          not null, primary key
#  first_name           :string           not null
#  last_name            :string           not null
#  email                :string           not null
#  description          :string
#  password_digest      :string           not null
#  session_token        :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  userpic_file_name    :string
#  userpic_content_type :string
#  userpic_file_size    :integer
#  userpic_updated_at   :datetime
#  unread_messages      :integer          default(0)
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
