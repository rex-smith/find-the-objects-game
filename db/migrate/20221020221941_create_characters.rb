class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.float :x_location
      t.float :y_location

      t.timestamps
    end
  end
end
