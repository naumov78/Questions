class Api::UserLikedQuestionsController < ApplicationController

  def index
    @user_liked_questions = current_user.liked_questions
  end


  def create
    @user_liked_question = UserLikedQuestion.new(question_params)
    if @user_liked_question.save
      @question = @user_liked_question.liked_question
      @user = @question.user
      @current_user = current_user
      @watched_questions = update_watched_questions
      render 'api/questions/show'
    else
      render json: @user_liked_question.errors.full_messages, status: 422
    end
  end


  def destroy
    idx = params[:id].to_i
    liked_question = UserLikedQuestion.where("user_id = ?", question_params[:user_id]).where("question_id = ?", question_params[:question_id])
    @question = liked_question.first.liked_question
    @topic = @question.topic
    @topic_questions = @topic.questions
    @user = @question.user
    @current_user = current_user
    @watched_questions = update_watched_questions
    unless liked_question.nil?
      UserLikedQuestion.delete(liked_question)
      render 'api/topics/show' if idx == 1
      render 'api/questions/show' if idx == 2
    else
      render json: ['no such liked question'], status: 404
    end
  end


  private

  def question_params
    params.require(:user_liked_question).permit(:user_id, :question_id)
  end

  def update_watched_questions
    ans = Answer.all.order(created_at: :desc)
    watched_questions = []
    i = 0
    while i < ans.length && watched_questions.length <= 20
        if @current_user.watched_questions.include?(ans[i].question) && !watched_questions.include?(ans[i].question)
        watched_questions.push(ans[i].question)
      end
    i += 1
    end
    watched_questions
  end

end
