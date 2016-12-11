# debugger
json.extract! user, :id, :first_name, :last_name, :description
# json.merge! user.attributes
json.topics user.topics.map(&:title)
