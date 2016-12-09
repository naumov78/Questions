class ChangeUsersTable < ActiveRecord::Migration
  def change
    remove_column :users, :asked_questions
    remove_column :users, :answers
    remove_column :users, :subscribed_topics

  end
end
