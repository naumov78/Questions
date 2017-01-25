json.comments comments do |comment|
  json.extract! :id, :body, :created_at
  json.author comment.author
  json.author_userpic_url asset_path(comment.author.userpic.url)
end
