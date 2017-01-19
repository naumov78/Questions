
  json.liked_id question.id
  json.body question.liked_question.body
  json.id question.liked_question.id
  json.date question.liked_question.created_at
  json.author_first_name question.liked_question.user.first_name
  json.author_last_name question.liked_question.user.last_name
  json.author_id question.liked_question.user.id
  json.author_descr question.liked_question.user.description
  json.author_userpic_url asset_path(question.liked_question.user.userpic.url)
  json.liked_users question.liked_question.liked_users
