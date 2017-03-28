class Api::AnswersController < ApplicationController


  def index
    @answers = Answer.where("question_id = ?", answer_params[:question_id])
  end

  def show
    @answer = Answer.find(params[:id])
    render :show
  end

  def create
    @answer = current_user.answers.new(answer_params)
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end


  private

  def answer_params
    params.require(:answer).permit(:question_id, :author_id, :body)
  end


end
