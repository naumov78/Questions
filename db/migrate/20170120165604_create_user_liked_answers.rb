class CreateUserLikedAnswers < ActiveRecord::Migration
  def change
    create_table :user_liked_answers do |t|
      t.integer :user_id, null: false
      t.integer :answer_id, null: false

      t.timestamps null: false
    end

    add_index :user_liked_answers, [:user_id, :answer_id], unique: true
  end
end
