json.extract! user, :id, :first_name, :last_name, :description, :userpic, :topics, :created_at, :out_follows
json.userpic_url asset_path(user.userpic.url)



json.index_topics user.topics do |topic|
  json.index_questions topic.questions.order(created_at: :desc) do |question|
  json.extract! question, :id, :author_id, :body, :created_at, :answers
  json.auth_first_name question.user.first_name
  json.auth_last_name question.user.last_name
  json.auth_descr question.user.description
  json.auth_userpic_url asset_path(question.user.userpic.url)
  json.liked_users question.liked_users
  json.idx_topic_id question.topic.id
  json.idx_topic_title question.topic.title
  end
end
