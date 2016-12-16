class Api::TopicsController < ApplicationController

  def index
    @topics = Topic.all
  end

  def show
    @topic = Topic.find(params[:id]).questions.order(created_at: :desc)
  end

end
