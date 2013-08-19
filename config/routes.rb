Portfolio::Application.routes.draw do
  root to: 'main#index'
  get "main/index"
end