class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :question_id, null: false
      t.integer :author_id, null: false
      t.string :body, null: false
      t.integer :views, default: 0
      t.integer :rating, default: 0
    end
  end
end
