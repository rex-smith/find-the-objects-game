Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show] do
        resources :characters, only: [:index]
        resources :records, only: [:index, :show, :create, :update]
      end
      get '/records/top', to: 'records#top'
    end
  end
  
  root 'root#index'
  get '*path' => 'root#index'
end