class CreateProjects < ActiveRecord::Migration
  def up
    create_table :projects do |t|
      t.string :title
      t.string :link
      t.text :description
      t.string :first_image
      t.string :second_image
      t.string :third_image

      t.timestamps
    end
  end

  def down
    drop_table :projects
  end
end
