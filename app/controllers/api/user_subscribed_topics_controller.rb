class Api::UserSubscribedTopicsController < ApplicationController


  def index
    @user_subscribed_topics = current_user.topics
  end


  def create
    @user_subscribed_topics = current_user.user_subscribed_topics.new(topics_params)

    if @user_subscribed_topics.save
      @topic = @user_subscribed_topics.topic
      render 'api/topics/show'
    else
      render json: @user_subscribed_topics.errors.full_messages, status: 422
    end
  end


  def update
    @user_subscribed_topic = UserSubscribedTopic.find(params[:id])

    if @user_subscribed_topic.update_attributes(topics_params)

      ans = Answer.all.order(created_at: :desc)
      @watched_questions = []
      i = 0
      while i < ans.length && @watched_questions.length <= 20
          if current_user.watched_questions.include?(ans[i].question) && !@watched_questions.include?(ans[i].question)
          @watched_questions.push(ans[i].question)
        end
      i += 1
      end

      render 'api/users/show'
    else
      render json: @user_subscribed_topic.errors.full_messages, status: 422
    end

  end


  private

  def topics_params
    params.require(:user_subscribed_topic).permit(:topic_id)
  end


end
