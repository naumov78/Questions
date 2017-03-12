# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170309204101) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.integer  "question_id",             null: false
    t.integer  "author_id",               null: false
    t.string   "body",                    null: false
    t.integer  "views",       default: 0
    t.integer  "rating",      default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "answers", ["author_id"], name: "index_answers_on_author_id", using: :btree
  add_index "answers", ["question_id"], name: "index_answers_on_question_id", using: :btree

  create_table "asked_questions", force: :cascade do |t|
    t.integer "author_id",   null: false
    t.integer "question_id", null: false
  end

  add_index "asked_questions", ["author_id"], name: "index_asked_questions_on_author_id", using: :btree
  add_index "asked_questions", ["question_id"], name: "index_asked_questions_on_question_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "answer_id",  null: false
    t.string   "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["answer_id"], name: "index_comments_on_answer_id", using: :btree
  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree

  create_table "follows", force: :cascade do |t|
    t.integer  "followee_id", null: false
    t.integer  "follower_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "follows", ["followee_id", "follower_id"], name: "index_follows_on_followee_id_and_follower_id", unique: true, using: :btree
  add_index "follows", ["followee_id"], name: "index_follows_on_followee_id", using: :btree
  add_index "follows", ["follower_id"], name: "index_follows_on_follower_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "author_id",                   null: false
    t.integer  "addressee_id",                null: false
    t.string   "title"
    t.string   "body",                        null: false
    t.boolean  "unread",       default: true
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "messages", ["addressee_id"], name: "index_messages_on_addressee_id", using: :btree
  add_index "messages", ["author_id"], name: "index_messages_on_author_id", using: :btree

  create_table "question_answers", force: :cascade do |t|
    t.integer "question_id", null: false
    t.integer "answer_id",   null: false
  end

  add_index "question_answers", ["answer_id"], name: "index_question_answers_on_answer_id", using: :btree
  add_index "question_answers", ["question_id"], name: "index_question_answers_on_question_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.integer  "author_id",              null: false
    t.string   "body",                   null: false
    t.integer  "views",      default: 0
    t.integer  "rating",     default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "topic_id",               null: false
  end

  add_index "questions", ["author_id"], name: "index_questions_on_author_id", using: :btree
  add_index "questions", ["topic_id"], name: "index_questions_on_topic_id", using: :btree

  create_table "topics", force: :cascade do |t|
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_answers", force: :cascade do |t|
    t.integer "user_id",   null: false
    t.integer "answer_id", null: false
  end

  add_index "user_answers", ["answer_id"], name: "index_user_answers_on_answer_id", using: :btree
  add_index "user_answers", ["user_id"], name: "index_user_answers_on_user_id", using: :btree

  create_table "user_liked_answers", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "answer_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "user_liked_answers", ["user_id", "answer_id"], name: "index_user_liked_answers_on_user_id_and_answer_id", unique: true, using: :btree

  create_table "user_liked_comments", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "comment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "user_liked_comments", ["user_id", "comment_id"], name: "index_user_liked_comments_on_user_id_and_comment_id", unique: true, using: :btree

  create_table "user_liked_questions", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "question_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_liked_questions", ["user_id", "question_id"], name: "index_user_liked_questions_on_user_id_and_question_id", unique: true, using: :btree

  create_table "user_subscribed_topics", force: :cascade do |t|
    t.integer "user_id"
    t.integer "topic_id"
  end

  add_index "user_subscribed_topics", ["topic_id"], name: "index_user_subscribed_topics_on_topic_id", using: :btree
  add_index "user_subscribed_topics", ["user_id"], name: "index_user_subscribed_topics_on_user_id", using: :btree

  create_table "user_watched_questions", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "question_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_watched_questions", ["user_id", "question_id"], name: "index_user_watched_questions_on_user_id_and_question_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "first_name",                       null: false
    t.string   "last_name",                        null: false
    t.string   "email",                            null: false
    t.string   "description"
    t.string   "password_digest",                  null: false
    t.string   "session_token",                    null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.string   "userpic_file_name"
    t.string   "userpic_content_type"
    t.integer  "userpic_file_size"
    t.datetime "userpic_updated_at"
    t.integer  "unread_messages",      default: 0
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["first_name"], name: "index_users_on_first_name", using: :btree
  add_index "users", ["last_name"], name: "index_users_on_last_name", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
