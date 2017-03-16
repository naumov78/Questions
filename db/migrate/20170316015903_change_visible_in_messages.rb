class ChangeVisibleInMessages < ActiveRecord::Migration
  def change
    remove_column :messages, :visible
    add_column :messages, :author_visible, :boolean, default: true
    add_column :messages, :addressee_visible, :boolean, default: true
  end
end
