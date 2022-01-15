class Api::CoffeesController < ApplicationController
    before_actions : set_coffee, only: [:show, :update, :destroy]

    def index
        render json: current_user.coffees
    end

    def show
        render json: @coffees
    end

    def create
        @coffee = current_user.coffees.new(coffee_params)
        if @coffee.save
            render json: @coffee
        else
            render json: { errors: @coffee.errors }, status: :unprocessable_entity
        end
    end

    def update
        if @coffee.update(cofee_params)
            render json: @coffee
        else
            render json: { errors: @coffee.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @coffee.destroy
        render json: { message: "Coffee deleted"}
    end

    private

    def coffee_params
        params.require(:coffee).permit(:name, :desc, :rating)
    end

    def set_coffee
        @coffee = current_user.coffee.find(params[:id])
    end
end


