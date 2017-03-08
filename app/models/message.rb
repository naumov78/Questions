# == Schema Information
#
# Table name: messages
#
#  id           :integer          not null, primary key
#  author_id    :integer          not null
#  addressee_id :integer          not null
#  title        :string
#  body         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Message < ActiveRecord::Base

  belongs_to :author,
  class_name: "User"

  belongs_to :addressee,
  class_name: "User"
  

end