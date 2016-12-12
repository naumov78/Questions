# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ActiveRecord::Base

has_many :user_subscribed_topics
has_many :users, through: :user_subscribed_topics

has_many :questions,
class_name: "Question",
primary_key: :id,
foreign_key: :topic_id

end


#1  Culture
#2  Technology
#3  Science
#4  Movies
#5  Books
#6  Health
#7  Music
#8  Education
#9  Business
#10 Food
#11 Travel
#12 Psychology
#13 History
#14 Design
#15 Cooking
#16 Photography
#17 Sports
#18 Economics
#19 Writing
#20 Fashion
#21 Philosophy
#22 Finance
#23 Marketing
#24 Mathematics
#25 Politics
#26 Literature
#27 Children
