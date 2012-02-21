class Article < ActiveRecord::Base
	validates :title, :author, :body, :presence => true
	validates :author_is_not_pat

	private
	def author_is_not_pat
		
	end
end
