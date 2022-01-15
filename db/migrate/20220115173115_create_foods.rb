class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.string :type
      t.string :desc
      t.string :rating
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
