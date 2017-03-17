# Questions


"Questions" is a web application inspired by "[Quora](https://www.quora.com/)" built using Ruby on Rails and React/Redux.
It allows users to ask questions and get answers as well as answer the questions of others.

Ask your question [here](https://allquestions.herokuapp.com/#/) (Live application)

Welcome page - RegEx is used for email validation during sign up.

![Welcome page](/docs/wireframes/welcome_page.png)

The second step of sign up process is subscription. User has to choose the topics from the list.

![Subscribe](/docs/wireframes/screenshots/subscribe.png)

User index page - renders recent questions from user's subscribed topics

![User Index](/docs/wireframes/screenshots/user_index.png)

Header - has Ask Question form, Message (with indicating number of unread messages), user picture/name and dropdow menu with Profile and Logout links.

![Header](/docs/wireframes/screenshots/header.png)

Add More Topics feature allows users to add additional topic to their subscribed topic list.

![Add Topic](/docs/wireframes/screenshots/add_topic.png)


Topic index page - renders questions from a particular topic sorted by creation date/time in descending order. Each question has upvote/downvote functionality and Quick Answer button for rendering Quick Answer form.

![Topic Index](/docs/wireframes/screenshots/topic_index.png)

In case the topic has no questions yet a user will be offered to ask first question which will be posted to the current topic by default or any other topic through drop down list of topics.

![Empty Index](/docs/wireframes/screenshots/empty_topic.png)

Also question may be asked using Ask Question form in the header.

![Ask Form](/docs/wireframes/screenshots/ask_form.png)


Question page displays the question with the following features:
* add answer
* upvote/downvote
* follow/unfollow author - user starts to follow the question's author and would see new questions from the author in the upper right block - "Recent questions from your favorite authors".
* watch/unwatch question - user starts to watch the question and would see updates on the answers in the lower right block - "Updates on your watched questions".

![Question](/docs/wireframes/screenshots/question.png)

Answer form

![Answer](/docs/wireframes/screenshots/answer.png)

Under the question there is a list of answers sorted by answer date/time in descending order. Each answer can be upvoted/downvoted and has comments functionality.

![Comments](/docs/wireframes/screenshots/comments.png)

Each question, answer, comment, message has author information and link to author profile page. Profile page renders detailed user information and has compose private message functionality.

![User Profile](/docs/wireframes/screenshots/user_profile.png)

![Compose Message](/docs/wireframes/screenshots/compose_message.png)

Also user page allows to check user's public statistics - user's asked questions and user's answers.

![User Statistics](/docs/wireframes/screenshots/user_statistics.png)

Each user has access to personal profile page which has much more options than other profile pages. It has Edit user functionality, extended statistics and rendering messages functionality.

![personal_profile](/docs/wireframes/screenshots/personal_profile.png)

Users can update their information.

![Update User](/docs/wireframes/screenshots/update_user.png)



In addition to regular user profile page's statistics (lists of questions and answers) personal profile has also lists of followed authors and watched questions.

![Personal Statistics](/docs/wireframes/screenshots/personal_statistics.png)


Show Messages button renders Inbox tab with the list of received messages sorted by date/time in descending order. Unread messages are bold.

![Inbox](/docs/wireframes/screenshots/inbox.png)

After click on the message in the list message content with message details will be rendered. Any message may be deleted by receiver or sender. If it's deleted by receiver it won't be render in receiver's inbox anymore, but still be rendered in sender's outbox. The same happens when sender delete the message - it will be deleted from outbox only, not from receiver's inbox.

![Message](/docs/wireframes/screenshots/message.png)

Each message can be replied.

![Message](/docs/wireframes/screenshots/reply.png)





### Features
* Sign up/in with email
* Upload user image
* Update user information
* Create subscription for specific topics
* Update subscription
* View questions for subscribed topics
* Add question to any topic
* View particular question
* View answers for the question
* Add answer to question
* Upvote/downvote question
* Follow/unfollow author
* Watch/unwatch question
* Upvote/downvote answer
* Comments on answer
* Upvote/downvote comment
* User statistics - questions, answers, followees, watched questions
* Private messaging




### To-Do
* [ ] Add question search
* [ ] Rendering question/answers views and rating
* [ ] Ability to unsubscribe from a topic
