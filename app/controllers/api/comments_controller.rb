class Api::CommentsController < ApplicationController

  def show
    @comments = Comment.find_by(answer_id: comment_params[:answer_id])
  end

  def create
    comment = current_user.comments.new(comment_params)
    if comment.save
      @question = comment.answer.question
      @user = @question.user
      @watched_questions = update_watched_questions
      render 'api/questions/show'
    else
      render json: comment.errors.full_messages, status: 422
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:answer_id, :body)
  end


end
