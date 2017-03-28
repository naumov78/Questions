class Api::UserLikedAnswersController < ApplicationController

  def index
    @user_liked_answers = current_user.liked_answers
  end


  def create
    user_liked_answer = UserLikedAnswer.new(answer_params)
    if user_liked_answer.save
      @question = Answer.find(user_liked_answer.answer_id).question
      @user = @question.user
      @current_user = current_user
      render 'api/questions/show'
    else
      render json: user_liked_answer.errors.full_messages, status: 422
    end
  end


  def destroy
    liked_answer = UserLikedAnswer.where("user_id = ?", answer_params[:user_id]).where("answer_id = ?", answer_params[:answer_id])
    @question = Answer.find(liked_answer[0].answer_id).question
    @user = @question.user
    @current_user = current_user
    unless liked_answer.nil?
      UserLikedAnswer.delete(liked_answer)
      render 'api/questions/show'
    else
      render json: ['no such liked answer'], status: 404
    end
  end


  private

  def answer_params
    params.require(:user_liked_answer).permit(:user_id, :answer_id)
  end


end
