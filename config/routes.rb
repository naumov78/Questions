Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show]

    # resources :topics, only: [:show] do
      resources :questions, only: [:create, :show] do
        resources :answers, only: [:create, :show]   do
          resources :comments, only: [:create, :show]
        end
      end
    # end
  end

end
