class Api::FollowsController < ApplicationController

  def create

    @follow = current_user.out_follows.create!(followee_id: follow_params[:followee_id])

    @user = current_user

    # ans = Answer.all.order(created_at: :desc)
    # @watched_questions = []
    # i = 0
    # while i < ans.length && @watched_questions.length <= 20
    #     if @user.watched_questions.include?(ans[i].question) && !@watched_questions.include?(ans[i].question)
    #     @watched_questions.push(ans[i].question)
    #   end
    # i += 1
    # end

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
