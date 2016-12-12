class AddAttachmentUserpicToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :userpic
    end
  end

  def self.down
    remove_attachment :users, :userpic
  end
end
