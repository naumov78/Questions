class ChangeCommentsTableTwo < ActiveRecord::Migration
  def change

    change_column :comments, :body, :string, length: 5 


  end
end
