# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

Game.create(title: 'Bottles', prompt: 'Find the five empty bottles')
Game[0].characters.create(x_location: 120, y_location: 145)
Game[0].characters.create(x_location: 120, y_location: 145)
Game[0].characters.create(x_location: 120, y_location: 145)
Game[0].characters.create(x_location: 120, y_location: 145)
Game[0].characters.create(x_location: 120, y_location: 145)

Game.create(title: 'Businessmen', prompt: 'Find the three owls')
Game[1].characters.create(x_location: 120, y_location: 145)
Game[1].characters.create(x_location: 120, y_location: 145)
Game[1].characters.create(x_location: 120, y_location: 145)

Game.create(title: 'Chicks', prompt: 'Find the five lemons')
Game[2].characters.create(x_location: 120, y_location: 145)
Game[2].characters.create(x_location: 120, y_location: 145)
Game[2].characters.create(x_location: 120, y_location: 145)
Game[2].characters.create(x_location: 120, y_location: 145)
Game[2].characters.create(x_location: 120, y_location: 145)

Game.create(title: 'Corgis', prompt: 'Find the three breads')
Game[3].characters.create(x_location: 120, y_location: 145)
Game[3].characters.create(x_location: 120, y_location: 145)
Game[3].characters.create(x_location: 120, y_location: 145)

Game.create(title: 'Flowers', prompt: 'Find the five butterflies')
Game[4].characters.create(x_location: 120, y_location: 145)
Game[4].characters.create(x_location: 120, y_location: 145)
Game[4].characters.create(x_location: 120, y_location: 145)
Game[4].characters.create(x_location: 120, y_location: 145)
Game[4].characters.create(x_location: 120, y_location: 145)

Game.create(title: 'Kiwis', prompt: 'Find the four kiwi fruits')
Game[5].characters.create(x_location: 120, y_location: 145)
Game[5].characters.create(x_location: 120, y_location: 145)
Game[5].characters.create(x_location: 120, y_location: 145)
Game[5].characters.create(x_location: 120, y_location: 145)

Game.create(title: 'Lobsters', prompt: 'Find the four crabs')
Game[6].characters.create(x_location: 120, y_location: 145)
Game[6].characters.create(x_location: 120, y_location: 145)
Game[6].characters.create(x_location: 120, y_location: 145)
Game[6].characters.create(x_location: 120, y_location: 145)

Game.create(title: 'Tomatoes', prompt: 'Find the three apples')
Game[7].characters.create(x_location: 120, y_location: 145)
Game[7].characters.create(x_location: 120, y_location: 145)
Game[7].characters.create(x_location: 120, y_location: 145)

Game.create(title: 'Watermelons', prompt: 'Find the five seedless watermelons')
Game[8].characters.create(x_location: 120, y_location: 145)
Game[8].characters.create(x_location: 120, y_location: 145)
Game[8].characters.create(x_location: 120, y_location: 145)
Game[8].characters.create(x_location: 120, y_location: 145)
Game[8].characters.create(x_location: 120, y_location: 145)

# Build a database of records
Game.length.times do |i|
  10.times do
    Game[i].records.create(username: Faker::Name.first_name, time: rand(30.00..120.00))
  end
end