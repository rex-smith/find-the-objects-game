class AddGameIdToCharacter < ActiveRecord::Migration[7.0]
  def change
    add_column :characters, :game_id, :integer
  end
end
