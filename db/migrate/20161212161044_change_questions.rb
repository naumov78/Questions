class ChangeQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :topic_id, :integer, null: false
    add_index :questions, :topic_id
  end
end
