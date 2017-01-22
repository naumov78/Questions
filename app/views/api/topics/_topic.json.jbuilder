
json.array! topic do |question|
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
