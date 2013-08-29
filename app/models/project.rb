class Project < ActiveRecord::Base
  attr_accessible :title, :link, :description, :first_image, :second_image, :third_image
end
