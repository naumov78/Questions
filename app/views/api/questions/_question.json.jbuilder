json.extract! question, :id, :author_id, :body, :topic_id, :views, :rating, :answers, :created_at
json.extract! user, :first_name, :last_name, :description
json.author_userpic_url asset_path(user.userpic.url)

json.liked_users question.liked_users

json.answers question.answers do |answer|
  json.extract! answer, :id, :author_id, :body, :created_at
  json.author_first_name answer.user.first_name
  json.author_last_name answer.user.last_name
  json.author_descr answer.user.description
  json.author_userpic_url asset_path(answer.user.userpic.url)
end
