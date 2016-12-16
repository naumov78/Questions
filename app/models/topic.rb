# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ActiveRecord::Base

has_many :user_subscribed_topics, inverse_of: :topic
has_many :users, through: :user_subscribed_topics

has_many :questions,
class_name: "Question",
primary_key: :id,
foreign_key: :topic_id

end
