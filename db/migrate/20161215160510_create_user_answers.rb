class CreateUserAnswers < ActiveRecord::Migration
  def change
    create_table :user_answers do |t|
      t.integer :user_id, null: false
      t.integer :answer_id, null: false
    end
    add_index :user_answers, :user_id
    add_index :user_answers, :answer_id
  end
end
