Rails.application.routes.draw do

  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, except: [:index, :new]
    resources :user_subscribed_topics, only: [:index, :show, :update]
    resources :topics, only: [:index, :show] do
      resources :questions, only: [:index, :create, :show]
    end
  end
end
