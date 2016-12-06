class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :description
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :asked_questions, null: false, array: true, default: []
      t.string :answers, null: false, array: true, default: []
      t.string :subscribed_topics, null: false, array: true, default: []

      t.timestamps null: false
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :first_name
    add_index :users, :last_name
  end
end
