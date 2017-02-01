class Api::TopicsController < ApplicationController

  def index
    @topics = Topic.all
  end

  def show
    @topic = Topic.find(params[:id])
    @topic_questions = Topic.find(params[:id]).questions.order(created_at: :desc)

    @user = current_user
    ans = Answer.all.order(created_at: :desc)
    @watched_questions = []
    i = 0
    while i < ans.length && @watched_questions.length <= 20
        if @user.watched_questions.include?(ans[i].question) && !@watched_questions.include?(ans[i].question)
        @watched_questions.push(ans[i].question)
      end
    i += 1
    end

  end

end
