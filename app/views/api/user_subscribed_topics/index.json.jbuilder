# debugger
# json.partial! "/api/user_subscribed_topics/topics", user_subscribed_topics: @user_subscribed_topics



# json.array! @user_subscribed_topics, partial: "/api/user_subscribed_topics/topics", as: :user_subscribed_topics

# debugger
json.partial! '/api/user_subscribed_topics/topics', collection: @user_subscribed_topics, as: :user_subscribed_topics
