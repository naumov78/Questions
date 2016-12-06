class Api::SessionsController < ApplicationController

  def create
    @user = find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      # render 'api/users/show'
      render json: ['user loggedin']
    else
      render json: ['Invalid credentials'], status: 401
    end

  end



  def destroy
    unless current_user.nil?
      logout
      # render {}
      render json: ['user loggedout']
    else
      render json: ['no current user'], status: 404
  end



end
