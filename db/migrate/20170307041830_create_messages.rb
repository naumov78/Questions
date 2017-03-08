class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|

        t.integer :author_id, null: false
        t.integer :addressee_id, null: false
        t.string :title
        t.string :body, null: false

        t.timestamps null: false
    end

      add_index :messages, :author_id
      add_index :messages, :addressee_id
  end
end
