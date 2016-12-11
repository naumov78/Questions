class UserSubscribedTopics < ActiveRecord::Migration
  def change
    create_table :user_subscribed_topics do |t|
    t.string :user_id
    t.string :topic_id
    end
    add_index :user_subscribed_topics, :user_id
    add_index :user_subscribed_topics, :topic_id
  end
  end
