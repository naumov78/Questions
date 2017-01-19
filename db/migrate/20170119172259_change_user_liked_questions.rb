class ChangeUserLikedQuestions < ActiveRecord::Migration

  drop_table(:user_liked_questions)

  def change
    create_table :user_liked_questions do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.timestamps
    end
      add_index :user_liked_questions, :user_id, unique: true
      add_index :user_liked_questions, :question_id, unique: true
    end

end
