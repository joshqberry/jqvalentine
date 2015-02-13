class WelcomeController < ApplicationController

def index
  @valentines = Valentine.all
end

def valentine
  @valentine = Valentine.new
end

def create
  @valentine = Valentine.new(params.require(:valentine).permit(:josh_name, :message, :name))
  @valentine.save
  redirect_to valentine_path
end





end
