class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :date
      t.string :water_frequency
      t.string :sun_needed
      t.boolean :alive
      t.belongs_to :user

      t.timestamps
    end
  end
end
