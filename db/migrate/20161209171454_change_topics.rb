class ChangeTopics < ActiveRecord::Migration
  def change
    drop_table(:user_subscribed_topics)

    create_table :user_subscribed_topics do |t|
    t.integer :user_id
    t.integer :topic_id
    end
    add_index :user_subscribed_topics, :user_id
    add_index :user_subscribed_topics, :topic_id

  end
end
