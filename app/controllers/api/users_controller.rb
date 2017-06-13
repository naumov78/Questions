class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)

      # ans = Answer.all.order(created_at: :desc)
      # @watched_questions = []
      # i = 0
      # while i < ans.length && @watched_questions.length < 20
      #     if @user.watched_questions.include?(ans[i].question) && !@watched_questions.include?(ans[i].question)
      #     @watched_questions.push(ans[i].question)
      #   end
      # i += 1
      # end

      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def update
    @user = User.find(params[:id])
      if @user.update_attributes(user_params)

        # ans = Answer.all.order(created_at: :desc)
        # @watched_questions = []
        # i = 0
        # while i < ans.length && @watched_questions.length < 20
        #     if @user.watched_questions.include?(ans[i].question) && !@watched_questions.include?(ans[i].question)
        #     @watched_questions.push(ans[i].question)
        #   end
        # i += 1
        # end

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
