# frozen_string_literal: true
class AddGameIdToRecord < ActiveRecord::Migration[7.0]
  def change
    add_column :records, :game_id, :integer
  end
end
