# Schema Information

## users
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
first_name         | string    | not null, indexed
last_name          | string    | not null, indexed
email              | string    | not null, indexed, unique
description        | string    |
password_digest    | string    | not null
session_token      | string    | not null, indexed, unique


## asked_questions (JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
author_id          | string    | not null, foreign key (references users), indexed
question_id        | string    | not null, foreign key (references questions), indexed

## user_answers (JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
user_id            | string    | not null, foreign key (references users), indexed
answer_id          | string    | not null, foreign key (references answers), indexed

## user_subscribed_topics (JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
user_id            | string    | not null, foreign key (references users), indexed
topic_id           | string    | not null, foreign key (references topics), indexed


## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title        | string    | not null


## topic_questions (JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
topic_id           | string    | not null, foreign key (references topics), indexed
question_id        | string    | not null, foreign key (references questions), indexed


## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | string    | not null
views       | integer   | default: 0
rating      | integer   | default: 0

## question_topics (JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
question_id        | string    | not null, foreign key (references questions), indexed
topic_id           | string    | not null, foreign key (references topics), indexed

## question_answers (JOIN table)
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
question_id        | string    | not null, foreign key (references questions), indexed
answer_id          | string    | not null, foreign key (references answers), indexed

## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question_id | integer   | not null, foreign key (references questions), indexed
author_id   | integer   | not null, foreign key (references users), indexed
body        | string    | not null
views       | integer   |
rating      | integer   |

## answer_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
answer_id   | integer   | not null, foreign key (references answers), indexed
author_id   | integer   | not null, foreign key (references users), indexed
body        | string    | not null
rating      | integer   |
