# i = 1;
# new_topics = []
# topics.each do |topic|
#   new_topics << [i, topic.title]
#   i += 1
# end

# debugger
json.array! @topics, :id, :title
# json.array! @topics, :title
# debugger



#
# json.array! topics do |topic|
#   json.extract! topic, :title
# end











#
# topics.each do |topic|
#   json.set! topic.id do
#     json.extract! topic, :id, :title
#   end
# end
