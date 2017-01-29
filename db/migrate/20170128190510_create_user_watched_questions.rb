class CreateUserWatchedQuestions < ActiveRecord::Migration
  def change
    create_table :user_watched_questions do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.timestamps
    end
      add_index :user_watched_questions, [:user_id, :question_id], :unique => true
    end
end
