# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :foods, dependent: :destroy
  has_many :coffees, dependent: :destroy
  has_many :bars, dependent: :destroy
end
