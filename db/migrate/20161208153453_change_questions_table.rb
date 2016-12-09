class ChangeQuestionsTable < ActiveRecord::Migration
  def change
    change_column :questions, :views, :integer, default: 0
    change_column :questions, :rating, :integer, default: 0

  end
end
