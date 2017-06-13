class Api::TopicsController < ApplicationController

  def index
    @topics = Topic.all
  end

  def show
    @topic = Topic.find(params[:id])
    @topic_questions = Topic.find(params[:id]).questions.order(created_at: :desc)

    @user = current_user
    @watched_questions = update_watched_questions

  end

end
