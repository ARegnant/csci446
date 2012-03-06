class AuthorsController < ApplicationController
  def index
	@authors = Authors.all
  end
end
