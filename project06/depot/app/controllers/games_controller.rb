class GamesController < ApplicationController
  def index
	@games = Game.paginate :page=>params[:page], :game=>'created_at desc', :per_page => 6

	respond_to do |format|
		format.html # index.html.erb
		format.xml { render :xml => @orders }
	end
  end
end
