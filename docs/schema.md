# Schema Information

## users
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
first_name         | string    | not null, indexed
last_name          | string    | not null, indexed
email              | string    | not null, indexed, unique
password_digest    | string    | not null
session_token      | string    | not null, indexed, unique
asked_questions    | array     |
subscribed_topics  | array


## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
questions   | array     |
subscribers | array     |


## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
body        | string    | not null
topics      | array     |
answers     | array     |
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

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
answer_id   | integer   | not null, foreign key (references answers), indexed
author_id   | integer   | not null, foreign key (references users), indexed
body        | string    | not null
rating      | integer   |
