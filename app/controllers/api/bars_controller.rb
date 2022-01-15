class Api::BarsController < ApplicationController
    before_actions : set_bar, only: [:show, :update, :destroy]

    def index
        render json: current_user.bars
    end

    def show
        render json: @bar
    end

    def create
        @bar = current_user.bars.new(bar_params)
        if @bar.save
            render json: @bar
        else
            render json: { errors: @bar.errors }, status: :unprocessable_entity
        end
    end

    def update
        if @bar.update(bar)
            render json: @bar
        else
            render json: { errors: @bar.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @bar.destroy
        render json: { message: "Bar deleted"}
    end

    private

    def bar_params
        params.require(:bar).permit(:name, :desc, :rating)
    end

    def set_bar
        @bar = current_user.bars.find(params[:id])
    end
end



end
