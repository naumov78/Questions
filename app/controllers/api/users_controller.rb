class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render json: ['user created']
      # render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end

  end


  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :description, :subscribed_topics, :password)
  end


end
