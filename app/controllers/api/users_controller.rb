class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def update
    @user = User.find(params[:id])
      if @user.update_attributes(user_params)
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 422
      end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :description, :password, :userpic, topic_ids: [])
  end


end
