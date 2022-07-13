# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# t.string :name
# t.string :home_date
# t.string :water_frequency
# t.string :sun_needed
# t.string :health
User.create(username: 'Jharell')
User.create(username: "Thomas")
Plant.create(name: 'Succulent', home_date: '1/10/21', water_frequency: 3, deprived_count: 0, user_id:1)
Plant.create(name: 'Basil', home_date: '1/10/21', water_frequency: 2, deprived_count: 1, user_id:2)
Plant.create(name: 'Rosemary', home_date: '1/10/21', water_frequency: 1, deprived_count: 2, user_id:3)
Plant.create(name: 'Parsley', home_date: '1/10/21', water_frequency: 24, deprived_count: 1, user_id:3)