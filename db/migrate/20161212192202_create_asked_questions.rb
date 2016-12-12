class CreateAskedQuestions < ActiveRecord::Migration
  def change
    create_table :asked_questions do |t|
      t.integer :author_id, null: false
      t.integer :question_id, null: false
    end
    add_index :asked_questions, :author_id
    add_index :asked_questions, :question_id
  end
end
