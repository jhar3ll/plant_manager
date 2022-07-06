class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :home_date
      t.integer :water_frequency
      t.integer :deprived_count
      t.belongs_to :user

      t.timestamps
    end
  end
end
