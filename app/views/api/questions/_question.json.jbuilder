json.extract! question, :id, :author_id, :body, :topic_id, :views, :rating, :answers, :created_at, :user
json.extract! user, :first_name, :last_name, :description

json.author_userpic_url asset_path(user.userpic.url)

json.topic_title question.topic.title
json.liked_users question.liked_users
json.watched_users question.watched_users


json.out_follows current_user.out_follows
json.followees current_user.followees do |followee|
  json.extract! followee, :id, :description, :first_name, :last_name
  json.follow_created_at current_user.out_follows.find_by(followee_id: followee.id).created_at
  json.followee_userpic_url asset_path(followee.userpic.url)
  json.followee_questions followee.questions do |question|
    json.extract! question, :id, :author_id, :body, :created_at, :topic_id
    json.auth_first_name question.user.first_name
    json.auth_last_name question.user.last_name
    json.auth_userpic_url asset_path(question.user.userpic.url)
  end
end

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

json.watched_questions watched_questions do |question|
  json.extract! question, :id, :author_id, :body, :topic_id, :views, :rating, :answers, :created_at
  json.user question.user
  json.author_userpic_url asset_path(question.user.userpic.url)
  json.answers question.answers do |answer|
    json.extract! answer, :id, :created_at
    json.user answer.user
  end
end
