class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :rating
      t.date :date

      t.timestamps
    end
  end
end
