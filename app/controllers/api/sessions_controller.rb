class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      ans = Answer.all.order(created_at: :desc)
      @watched_questions = []
      i = 0
      while i < ans.length && @watched_questions.length <= 20
          if @user.watched_questions.include?(ans[i].question) && !@watched_questions.include?(ans[i].question)
          @watched_questions.push(ans[i].question)
        end
      i += 1
      end
      render 'api/users/show'
    else
      render json: ['Wrong Email or Password'], status: 401
    end

  end



  def destroy
    unless current_user.nil?
      logout
      render json: {}
    else
      render json: ['no current user'], status: 404
    end
  end



end
