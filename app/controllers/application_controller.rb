class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  helper_method :current_user, :logged_in?

  private

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end



  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end


  def logged_in?
    !!current_user
  end

  def update_watched_questions
    ans = Answer.all.order(created_at: :desc)
    watched_questions = []
    i = 0
    while i < ans.length && watched_questions.length <= 20
        if @current_user.watched_questions.include?(ans[i].question) && !watched_questions.include?(ans[i].question)
        watched_questions.push(ans[i].question)
      end
    i += 1
    end
    watched_questions
  end

end
