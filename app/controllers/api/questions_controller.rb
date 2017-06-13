class Api::QuestionsController < ApplicationController


  def index
    @questions = Question.all
  end

  def show
    @question = Question.includes(:answers).find(params[:id])
    @user = @question.user
    @current_user = current_user
    @watched_questions = update_watched_questions

    render :show
  end

  def create
    @question = current_user.questions.new(question_params)
    @user = current_user
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end


  private

  def question_params
    params.require(:question).permit(:topic_id, :body)
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
