## Component Hierarchy

**AuthFormContainer**
 - AuthForm
  + AuthErrors

**Header**
 - Header
   + AskQuestion

**MainContainer**
 - Sidebar
  + Topics
 - Feed
 - QuestionsIndex
    + Question
     - Answers
       + Comments


 **SideBarContainer**
 - Sidebar
  + Topics


 **FeedContainer**
 - Feed


 **QuestionContainer**
 - QuestionForm


**AnswerContainer**
 - AnswerForm


**CommentContainer**
 - CommentForm


 **SearchContainer**
 - SearchForm


## Routes

| Path                                                            | Component                   |
|-----------------------------------------------------------------|-------------------------    |
| "/"                                                             | "App"                       |
| "/signup"                                                       | "AuthFormContainer"         |
| "/login"                                                        | "AuthFormContainer"         |
| "/users/:userId"                                                | "UserViewContainer"         |
| "/questions/:questionId"                                        | "QuestionViewContainer"     |
| "/questions/:questionId/answers/:answerId"                      | "AnswerViewContainer"       |
| "/questions/:questionId/answers/:answerId/comments/:commentId"  | "CommentViewContainer"      |
| "/new-question"                                                 | "AskQuestion"               |
