class Api::QuestionsController < ApplicationController


  def index
    @questions = Question.all.where(:topic_id == question_params[:topic_id])
  end

  def show
    @question = Question.find(params[:id])
    render :show
  end

  def create
    @question = current_user.questions.new(question_params)
    # @question = Question.new(question_params)
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


end
