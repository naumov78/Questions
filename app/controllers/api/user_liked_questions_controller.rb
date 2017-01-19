class Api::UserLikedQuestionsController < ApplicationController

  def index
    @user_liked_questions = current_user.liked_questions
  end


  def create
    @user_liked_question = UserLikedQuestion.new(question_params)
    if @user_liked_question.save
      render 'api/user_liked_questions/show'
    else
      render json: @user_liked_question.errors.full_messages, status: 422
    end
  end


  def destroy
    liked_question = UserLikedQuestion.all.where({user_id: question_params[:user_id]}).where({question_id: question_params[:question_id]})
    unless liked_question.nil?
      UserLikedQuestion.delete(liked_question)
      render 'api/topics/show'
    else
      render json: ['no such liked question'], status: 404
    end
  end


  private

  def question_params
    params.require(:user_liked_question).permit(:user_id, :question_id)
  end


end
