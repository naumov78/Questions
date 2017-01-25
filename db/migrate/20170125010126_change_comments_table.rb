class ChangeCommentsTable < ActiveRecord::Migration
  def change

    drop_table(:comments)

    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :answer_id, null: false
      t.string :body, null: false

      t.timestamps null: false
    end

    add_index :comments, :author_id
    add_index :comments, :answer_id
  end
end
