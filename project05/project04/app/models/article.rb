class Article < ActiveRecord::Base
	validates :title, :author, :body, :presence => true
	validate :author_is_not_pat

	private
		def author_is_not_pat
			errors.add(:author, "Pat cannot post articles!") if author.downcase.include? "pat"
		end
end
