class Api::UserWatchedQuestionsController < ApplicationController

  def index
    @user_watched_questions = current_user.watched_questions
  end


  def create
    @user_watched_question = UserWatchedQuestion.new(question_params)
    if @user_watched_question.save
      @question = @user_watched_question.watched_question
      @user = @question.user
      @current_user = current_user
      render 'api/questions/show'
    else
      render json: @user_watched_question.errors.full_messages, status: 422
    end
  end


  def destroy
    watched_question = UserWatchedQuestion.all.where({user_id: question_params[:user_id]}).where({question_id: question_params[:question_id]})
    @question = watched_question[0].watched_question
    @topic = @question.topic
    @topic_questions = @topic.questions
    @user = @question.user
    @current_user = current_user
    unless watched_question.nil?
      UserWatchedQuestion.delete(watched_question)
      render 'api/questions/show'
    else
      render json: ['no such watched question'], status: 404
    end
  end


  private

  def question_params
    params.require(:user_watched_question).permit(:user_id, :question_id)
  end

end
