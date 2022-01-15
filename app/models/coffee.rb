class Coffee < ApplicationRecord
  belongs_to :user

  validates :name, :desc, :rating, presence: true
end
