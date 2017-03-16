json.extract! user, :id, :first_name, :last_name, :description, :userpic, :topics, :created_at, :out_follows, :unread_messages
json.userpic_url asset_path(user.userpic.url)


json.questions user.questions do |question|
  json.extract! question, :id, :author_id, :body, :created_at, :topic_id
  json.topic question.topic.title
  json.auth_first_name question.user.first_name
  json.auth_last_name question.user.last_name
  json.auth_userpic_url asset_path(question.user.userpic.url)
  json.answers_num question.answers.length

  json.liked_users question.liked_users do |user|
    json.extract! user, :id, :first_name, :last_name, :userpic, :description
    json.userpic_url asset_path(user.userpic.url)
  end

  json.watched_users question.watched_users do |user|
    json.extract! user, :id, :first_name, :last_name, :userpic, :description
    json.userpic_url asset_path(user.userpic.url)
  end

end

json.sent_messages user.sent_messages.order(created_at: :desc) do |message|
  json.extract! message, :id, :addressee_id, :title, :body, :unread, :author_visible, :created_at
  json.message_addressee User.find(message.addressee_id)
  json.addressee_userpic_url asset_path(User.find(message.addressee_id).userpic.url)
end

json.received_messages user.received_messages.order(created_at: :desc) do |message|
  json.extract! message, :id, :author_id, :title, :body, :unread, :addressee_visible, :created_at
  json.message_author User.find(message.author_id)
  json.author_userpic_url asset_path(User.find(message.author_id).userpic.url)
end

json.answers user.answers do |answer|
json.extract! answer, :author_id, :body, :created_at, :id, :question_id
json.liked_users_num answer.liked_users.length
json.question answer.question
json.question_topic answer.question.topic.title
json.comments_num answer.comments.length
  json.comments answer.comments do |comment|
    json.extract! comment, :id, :author_id, :body, :created_at
    json.extract! comment.author, :id, :first_name, :last_name, :userpic
    json.userpic_url asset_path(comment.author.userpic.url)
  end
end

json.watched_questions user.watched_questions do |question|
  json.extract! question, :id, :author_id, :body, :topic_id, :views, :rating, :answers, :created_at
  json.liked_users question.liked_users
  json.watched_users question.watched_users
  json.answers_num question.answers.length
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
