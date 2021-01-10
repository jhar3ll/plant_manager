class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :home_date
      t.string :water_frequency
      t.string :sun_needed
      t.string :health
      t.belongs_to :user

      t.timestamps
    end
  end
end
