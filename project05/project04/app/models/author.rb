class Article < ActiveRecord::Base
	has_attached_file :photo,
		:url  => "/assets/products/:id/:style/:basename.:extension",
		:path => ":rails_root/public/assets/products/:id/:style/:basename.:extension"
	validates_attachment_presence :photo
	validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']
end
