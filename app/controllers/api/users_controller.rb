class Api::UsersController < ApplicationController


  def show
    # sleep 3
    @user = User.find(params[:id])
    render :show
  end



  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      # render json: ['user created']
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  # def edit
  #   @user = User.find(params[:id])
  #   render 'api/users/edit'
  # end


  def update
    @user = User.find(params[:id])
      if @user.update_attributes(user_params)
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 422
      end
  end


  # def delete
  #   # user = User.find(params[:id])
  #   # if user.destroy
  #   #   render '/'
  #   # else
  #   #   render json: ['User can not be deleted'], status: 422
  #   # end
  # end


  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :description, :subscribed_topics, :password)
  end


end
