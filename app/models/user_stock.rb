class UserStock < ActiveRecord::Base
  belongs_to :user
  belongs_to :stock
  #validates_uniqueness_of :user_id, scope: :stock_id
  #validates :stock_id, :uniqueness => {:scope => :user_id, :message => ' was already added'}

end
