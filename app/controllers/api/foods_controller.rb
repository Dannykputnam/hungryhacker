class Api::FoodsController < ApplicationController
  before_action :set_food, only: [:show, :update, :destroy]

  def index
    render json: current_user.foods
  end

  def show
    render json: @food
  end

  def create
    @food = current_user.foods.new(food_params)
    if @food.save
      render json: @food
    else
      render json: { errors: @food.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @food.update(food_params)
      render json: @food
    else
      render json: { errors: @food.errors }, status: :unprocessable_entity
    end
  end

    def destroy
      @food.destroy
      render json: { message: "Food deleted"}
    end

    private

    def food_params
      params.require(:food).permit(:name, :desc, :rating)
    end

    def set_food
      @food = current_user.foods.find(params[:id])
    end
end
