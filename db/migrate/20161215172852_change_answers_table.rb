class ChangeAnswersTable < ActiveRecord::Migration
  def change

    drop_table(:answers)

    create_table :answers do |t|
      t.integer :question_id, null: false
      t.integer :author_id, null: false
      t.string :body, null: false
      t.integer :views, default: 0
      t.integer :rating, default: 0

      t.timestamps null: false
    end
    add_index :answers, :question_id
    add_index :answers, :author_id
  end
end
