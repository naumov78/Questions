json.extract! user, :id, :first_name, :last_name, :description, :userpic, :topics, :created_at, :out_follows
json.userpic_url asset_path(user.userpic.url)

json.watched_questions user.watched_questions do |question|
  json.extract! question, :id, :author_id, :body, :topic_id, :views, :rating, :answers, :created_at
  json.user question.user
  json.author_userpic_url asset_path(question.user.userpic.url)
  json.answers question.answers do |answer|
    json.extract! answer, :id, :created_at
    json.user answer.user
  end
end


json.followees user.followees do |followee|
  json.extract! followee, :id, :description, :first_name, :last_name
  if !current_user.out_follows.find_by(followee_id: followee.id).nil?
    json.follow_created_at current_user.out_follows.find_by(followee_id: followee.id).created_at
  end
  json.followee_userpic_url asset_path(followee.userpic.url)
  json.followee_questions followee.questions do |question|
    json.extract! question, :id, :author_id, :body, :created_at, :topic_id
    json.auth_first_name question.user.first_name
    json.auth_last_name question.user.last_name
    json.auth_userpic_url asset_path(question.user.userpic.url)
  end
end


json.index_topics user.topics do |topic|
  json.id topic.id
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
