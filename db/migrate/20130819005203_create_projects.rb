class CreateProjects < ActiveRecord::Migration
  def up
    create_table :projects do |t|
      t.string :title
      t.string :link
      t.string :description

      t.timestamps
    end
  end

  def down
    drop_table :projects
  end
end
