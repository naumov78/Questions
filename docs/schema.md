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
asked_questions    | string    | not null, array: true, default: []
answers            | string    | not null, array: true, default: []
subscribed_topics  | string    | not null, array: true, default: []


## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
questions   | string    | not null, array: true, default: []
subscribers | string    | not null, array: true, default: []


## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | string    | not null
topics      | string    | not null, array: true, default: []
answers     | string    | not null, array: true, default: []
views       | integer   |
rating      | integer   |

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
