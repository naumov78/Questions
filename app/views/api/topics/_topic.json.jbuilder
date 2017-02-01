json.extract! topic, :id, :title
json.extract! topic_questions


json.questions topic_questions do |question|
  json.body question.body
  json.id question.id
  json.date question.created_at
  json.author_first_name question.user.first_name
  json.author_last_name question.user.last_name
  json.author_id question.user.id
  json.author_descr question.user.description
  json.author_userpic_url asset_path(question.user.userpic.url)
  json.liked_users question.liked_users
  json.answers question.answers
end

json.watched_questions watched_questions do |question|
  json.extract! question, :id, :author_id, :body, :topic_id, :views, :rating, :answers, :created_at
  json.user question.user
  json.author_userpic_url asset_path(question.user.userpic.url)
  json.answers question.answers do |answer|
    json.extract! answer, :id, :created_at
    json.user answer.user
  end
end
