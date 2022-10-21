require 'faker'

Game.destroy_all

g = Game.create(title: 'Bottles', prompt: 'Find the five empty bottles')
g.characters.create(x_location: (820.to_f/900.to_f), y_location: (165.to_f/900.to_f)) # 900x900
g.characters.create(x_location: (169.to_f/900.to_f), y_location: (101.to_f/900.to_f))
g.characters.create(x_location: (427.to_f/900.to_f), y_location: (473.to_f/900.to_f))
g.characters.create(x_location: (293.to_f/900.to_f), y_location: (799.to_f/900.to_f))
g.characters.create(x_location: (728.to_f/900.to_f), y_location: (603.to_f/900.to_f))

g = Game.create(title: 'Businessmen', prompt: 'Find the three owls')
g.characters.create(x_location: (235.to_f/900.to_f), y_location: (709.to_f/900.to_f)) # 900x900
g.characters.create(x_location: (134.to_f/900.to_f), y_location: (186.to_f/900.to_f))
g.characters.create(x_location: (710.to_f/900.to_f), y_location: (741.to_f/900.to_f))

g = Game.create(title: 'Chicks', prompt: 'Find the five lemons')
g.characters.create(x_location: (168.to_f/900.to_f), y_location: (147.to_f/900.to_f)) # 900x900
g.characters.create(x_location: (449.to_f/900.to_f), y_location: (278.to_f/900.to_f))
g.characters.create(x_location: (441.to_f/900.to_f), y_location: (641.to_f/900.to_f))
g.characters.create(x_location: (799.to_f/900.to_f), y_location: (843.to_f/900.to_f))
g.characters.create(x_location: (631.to_f/900.to_f), y_location: (516.to_f/900.to_f))

g = Game.create(title: 'Corgis', prompt: 'Find the three breads')
g.characters.create(x_location: (693.to_f/900.to_f), y_location: (159.to_f/900.to_f))
g.characters.create(x_location: (323.to_f/900.to_f), y_location: (543.to_f/900.to_f))
g.characters.create(x_location: (514.to_f/900.to_f), y_location: (683.to_f/900.to_f))

g = Game.create(title: 'Flowers', prompt: 'Find the five butterflies')
g.characters.create(x_location: (248.to_f/900.to_f), y_location: (157.to_f/900.to_f))
g.characters.create(x_location: (331.to_f/900.to_f), y_location: (511.to_f/900.to_f))
g.characters.create(x_location: (490.to_f/900.to_f), y_location: (753.to_f/900.to_f))
g.characters.create(x_location: (738.to_f/900.to_f), y_location: (210.to_f/900.to_f))
g.characters.create(x_location: (828.to_f/900.to_f), y_location: (714.to_f/900.to_f))

g = Game.create(title: 'Kiwis', prompt: 'Find the four kiwi fruits')
g.characters.create(x_location: (147.to_f/900.to_f), y_location: (377.to_f/900.to_f))
g.characters.create(x_location: (593.to_f/900.to_f), y_location: (630.to_f/900.to_f))
g.characters.create(x_location: (662.to_f/900.to_f), y_location: (411.to_f/900.to_f))
g.characters.create(x_location: (715.to_f/900.to_f), y_location: (109.to_f/900.to_f))

g = Game.create(title: 'Lobsters', prompt: 'Find the four crabs')
g.characters.create(x_location: (155.to_f/900.to_f), y_location: (169.to_f/900.to_f))
g.characters.create(x_location: (327.to_f/900.to_f), y_location: (483.to_f/900.to_f))
g.characters.create(x_location: (391.to_f/900.to_f), y_location: (797.to_f/900.to_f))
g.characters.create(x_location: (829.to_f/900.to_f), y_location: (328.to_f/900.to_f))

g = Game.create(title: 'Tomatoes', prompt: 'Find the three apples')
g.characters.create(x_location: (79.to_f/900.to_f), y_location: (777.to_f/900.to_f))
g.characters.create(x_location: (463.to_f/900.to_f), y_location: (778.to_f/900.to_f))
g.characters.create(x_location: (793.to_f/900.to_f), y_location: (240.to_f/900.to_f))

g = Game.create(title: 'Watermelons', prompt: 'Find the five seedless watermelons')
g.characters.create(x_location: (149.to_f/900.to_f), y_location: (335.to_f/900.to_f))
g.characters.create(x_location: (291.to_f/900.to_f), y_location: (654.to_f/900.to_f))
g.characters.create(x_location: (761.to_f/900.to_f), y_location: (626.to_f/900.to_f))
g.characters.create(x_location: (835.to_f/900.to_f), y_location: (464.to_f/900.to_f))
g.characters.create(x_location: (852.to_f/900.to_f), y_location: (138.to_f/900.to_f))

# Build a database of records
Game.all.each do |selected_game|
  10.times do
    selected_game.records.create(username: Faker::Name.first_name, time: rand(30.00..120.00))
  end
end

# g = Game.create(title: 'Bottles', prompt: 'Find the five empty bottles')
# g.characters.create(x_location: 820, y_location: 165) # 900x900
# g.characters.create(x_location: 169, y_location: 101)
# g.characters.create(x_location: 427, y_location: 473)
# g.characters.create(x_location: 293, y_location: 799)
# g.characters.create(x_location: 728, y_location: 603)

# g = Game.create(title: 'Businessmen', prompt: 'Find the three owls')
# g.characters.create(x_location: 235, y_location: 709) # 900x900
# g.characters.create(x_location: 134, y_location: 186)
# g.characters.create(x_location: 710, y_location: 741)

# g = Game.create(title: 'Chicks', prompt: 'Find the five lemons')
# g.characters.create(x_location: 168, y_location: 147) # 900x900
# g.characters.create(x_location: 449, y_location: 278)
# g.characters.create(x_location: 441, y_location: 641)
# g.characters.create(x_location: 799, y_location: 843)
# g.characters.create(x_location: 631, y_location: 516)

# g = Game.create(title: 'Corgis', prompt: 'Find the three breads')
# g.characters.create(x_location: 693, y_location: 159)
# g.characters.create(x_location: 323, y_location: 543)
# g.characters.create(x_location: 514, y_location: 683)

# g = Game.create(title: 'Flowers', prompt: 'Find the five butterflies')
# g.characters.create(x_location: 248, y_location: 157)
# g.characters.create(x_location: 331, y_location: 511)
# g.characters.create(x_location: 490, y_location: 753)
# g.characters.create(x_location: 738, y_location: 210)
# g.characters.create(x_location: 828, y_location: 714)

# g = Game.create(title: 'Kiwis', prompt: 'Find the four kiwi fruits')
# g.characters.create(x_location: 147, y_location: 377)
# g.characters.create(x_location: 593, y_location: 630)
# g.characters.create(x_location: 662, y_location: 411)
# g.characters.create(x_location: 715, y_location: 109)

# g = Game.create(title: 'Lobsters', prompt: 'Find the four crabs')
# g.characters.create(x_location: 155, y_location: 169)
# g.characters.create(x_location: 327, y_location: 483)
# g.characters.create(x_location: 391, y_location: 797)
# g.characters.create(x_location: 829, y_location: 328)

# g = Game.create(title: 'Tomatoes', prompt: 'Find the three apples')
# g.characters.create(x_location: 79, y_location: 777)
# g.characters.create(x_location: 463, y_location: 778)
# g.characters.create(x_location: 793, y_location: 240)

# g = Game.create(title: 'Watermelons', prompt: 'Find the five seedless watermelons')
# g.characters.create(x_location: 149, y_location: 335)
# g.characters.create(x_location: 291, y_location: 654)
# g.characters.create(x_location: 761, y_location: 626)
# g.characters.create(x_location: 835, y_location: 464)
# g.characters.create(x_location: 852, y_location: 138)
