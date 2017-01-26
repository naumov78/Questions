class CreateUserLikedComments < ActiveRecord::Migration
  def change
    create_table :user_liked_comments do |t|
      t.integer :user_id, null: false
      t.integer :comment_id, null: false

      t.timestamps null: false
    end

    add_index :user_liked_comments, [:user_id, :comment_id], unique: true
  end
end
