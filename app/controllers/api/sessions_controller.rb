class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show'
      # render json: ['user loggedin']
    else
      render json: ['Wrong Email or Password'], status: 401
    end

  end



  def destroy
    unless current_user.nil?
      logout
      render json: {}
      # render json: ['user loggedout']
    else
      render json: ['no current user'], status: 404
    end
  end



end
