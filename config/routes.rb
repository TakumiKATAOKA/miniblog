Rails.application.routes.draw do


  devise_for :users
root 'blogs#index'

get 'blogs/new' => 'blogs#new'
post 'blogs' => 'blogs#create'
delete '/:id' => 'blogs#destroy'
get '/:id/edit' => 'blogs#edit'
patch '/:id/edit' => 'blogs#update'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
