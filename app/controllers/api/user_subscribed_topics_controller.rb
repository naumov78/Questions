class Api::UserSubscribedTopicsController < ApplicationController


  def index
    # topics = current_user.topics
    # titles = []
    # topics.each do |topic|
    #   titles << topic.title
    # end
    # debugger
    @user_subscribed_topics = current_user.topics
  end


  def create
    @user_subscribed_topic = UserSubscribedTopic.new(topics_params)

    if @user_subscribed_topic.save
      render 'api/users/show'
    else
      render json: @user_subscribed_topic.errors.full_messages, status: 422
    end
  end


  def update
    @user_subscribed_topic = UserSubscribedTopic.find(params[:id])

    if @user_subscribed_topic.update_attributes(topics_params)
      render 'api/users/show'
    else
      render json: @user_subscribed_topic.errors.full_messages, status: 422
    end

  end


  private

  def topics_params
    params.require(:user_subscribed_topic).permit(:user_id, :topic_id)
  end


end
