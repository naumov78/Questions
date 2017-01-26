# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  answer_id  :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base


  validates :body, length: { minimum: 1 }

  belongs_to :author,
  class_name: "User",
  primary_key: :id,
  foreign_key: :author_id

  belongs_to :answer


end
