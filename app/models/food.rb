class Food < ApplicationRecord
  belongs_to :user

  validates :name, :type, :desc, :rating, presence: true
end
