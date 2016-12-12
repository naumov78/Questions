class Api::TopicsController < ApplicationController

  def index
    @topics = Topic.all
    # debugger
  end

  def show
    @topic = Topic.find(params[:id]).questions
  end

end
