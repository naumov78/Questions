# debugger
json.extract! user, :id, :first_name, :last_name, :description, :userpic
json.userpic_url asset_path(user.userpic.url)
# json.merge! user.attributes
json.topics user.topics.map(&:title)
