# frozen_string_literal: true
class Game < ApplicationRecord
  has_many :characters, dependent: :destroy
  has_many :records, dependent: :destroy
end
