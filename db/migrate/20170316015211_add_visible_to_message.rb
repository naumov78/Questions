class AddVisibleToMessage < ActiveRecord::Migration
  def change
    add_column :messages, :visible, :boolean, default: true
  end
end
