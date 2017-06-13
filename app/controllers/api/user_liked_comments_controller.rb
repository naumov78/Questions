class Api::UserLikedCommentsController < ApplicationController

  def index
    @user_liked_comments = current_user.liked_comments
  end


  def create
    user_liked_comment = current_user.user_liked_comments.new(comment_params)
    if user_liked_comment.save
      @question = Comment.find(user_liked_comment.comment_id).answer.question
      @user = @question.user
      @current_user = current_user
      @watched_questions = update_watched_questions
      render 'api/questions/show'
    else
      render json: user_liked_comment.errors.full_messages, status: 422
    end
  end


  def destroy
    liked_comment = UserLikedComment.where(user_id: current_user.id).where("comment_id = ?", comment_params[:comment_id])
    @question = Comment.find(liked_comment[0].comment_id).answer.question
    @user = @question.user
    @current_user = current_user
    @watched_questions = update_watched_questions
    unless liked_comment.nil?
      UserLikedComment.delete(liked_comment)
      render 'api/questions/show'
    else
      render json: ['no such liked comment'], status: 404
    end
  end


  private

  def comment_params
    params.require(:user_liked_comment).permit(:comment_id)
  end

end
