Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show] do
        resources :characters, only: [:index]
        resources :records, only: [:index, :show, :create, :update]
      end
    end
  end
  
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

# get '/games/:id', to: 'games#show'