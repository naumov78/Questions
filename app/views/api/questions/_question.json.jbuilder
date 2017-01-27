json.extract! question, :id, :author_id, :body, :topic_id, :views, :rating, :answers, :created_at, :user
json.extract! user, :first_name, :last_name, :description

json.author_userpic_url asset_path(user.userpic.url)

json.topic_title question.topic.title
json.liked_users question.liked_users


json.out_follows current_user.out_follows

  json.answers question.answers do |answer|
    json.extract! answer, :id, :author_id, :body, :created_at
    json.ans_auth_first_name answer.user.first_name
    json.ans_auth_last_name answer.user.last_name
    json.ans_auth_descr answer.user.description
    json.ans_auth_userpic_url asset_path(answer.user.userpic.url)
    json.liked_users answer.liked_users

    json.comments answer.comments do |comment|
      json.extract! comment, :id, :author_id, :body, :created_at
      json.author comment.author
      json.author_userpic_url asset_path(comment.author.userpic.url)
      json.liked_users comment.liked_users
    end

  end
