class Api::FollowsController < ApplicationController

  def create

    @follow = current_user.out_follows.create!(followee_id: follow_params[:followee_id])
    @user = current_user

    render 'api/users/show'

  end



  def destroy
    follow = current_user.out_follows.find_by(followee_id: follow_params[:followee_id])
    follow.destroy!
    @user = current_user
    render 'api/users/show'
  end


  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end


end
