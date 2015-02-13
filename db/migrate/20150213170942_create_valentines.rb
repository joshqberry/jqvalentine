class CreateValentines < ActiveRecord::Migration
  def change
    create_table :valentines do |t|
      t.string :josh_name
      t.string :message
      t.string :name

      t.timestamps null: false
    end
  end
end
