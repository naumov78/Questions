# == Schema Information
#
# Table name: user_subscribed_topics
#
#  id       :integer          not null, primary key
#  user_id  :integer
#  topic_id :integer
#

class UserSubscribedTopic < ActiveRecord::Base

  belongs_to :topic,
  class_name: "Topic",
  foreign_key: :topic_id,
  primary_key: :id


  belongs_to :user,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id



end
