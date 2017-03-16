

User.delete_all
Message.delete_all
Topic.delete_all
Question.delete_all
Answer.delete_all
Comment.delete_all
Follow.delete_all
UserLikedAnswer.delete_all
UserLikedComment.delete_all
UserLikedQuestion.delete_all
UserSubscribedTopic.delete_all
UserWatchedQuestion.delete_all


culture = Topic.create!(title: 'Culture')
technology = Topic.create!(title: 'Technology')
science = Topic.create!(title: 'Science')
movies = Topic.create!(title: 'Movies')
books = Topic.create!(title: 'Books')
health = Topic.create!(title: 'Health')
music = Topic.create!(title: 'Music')
education = Topic.create!(title: 'Education')
business = Topic.create!(title: 'Business')
food = Topic.create!(title: 'Food')
travel = Topic.create!(title: 'Travel')
psychology = Topic.create!(title: 'Psychology')
history = Topic.create!(title: 'History')
design = Topic.create!(title: 'Design')
cooking = Topic.create!(title: 'Cooking')
photography = Topic.create!(title: 'Photography')
sports = Topic.create!(title: 'Sports')
economics = Topic.create!(title: 'Economics')
writing = Topic.create!(title: 'Writing')
fashion = Topic.create!(title: 'Fashion')
philosophy = Topic.create!(title: 'Philosophy')
finance = Topic.create!(title: 'Finance')
marketing = Topic.create!(title: 'Marketing')
mathematics = Topic.create!(title: 'Mathematics')
politics = Topic.create!(title: 'Politics')
literature = Topic.create!(title: 'Literature')
children = Topic.create!(title: 'Children')

# user1 = User.create!(first_name: 'Padme', last_name: 'Amidala', email: 'padme_amidala@starwars.com', description: 'Teenage queen', password: '12345', userpic: "https://s3.amazonaws.com/questions-pro/users/padme.jpg")
# user2 = User.create!(first_name: 'Jango', last_name: 'Fett', email: 'jango_fett@starwars.com', description: 'Bounty hunter', password: '12345', userpic: "https://s3.amazonaws.com/questions-pro/users/jango.jpg")
# user3 = User.create!(first_name: 'Jabba', last_name: 'the Hutt', email: 'jabba_hutt@starwars.com', description: 'Crime boss', password: '12345', userpic: "https://s3.amazonaws.com/questions-pro/users/jabba.jpg")
# user4 = User.create!(first_name: 'Qui-Gon', last_name: 'Jinn', email: 'quigon_jinn@starwars.com', description: 'Jedi Master', password: '12345', userpic: "https://s3.amazonaws.com/questions-pro/users/quigon.png")
# user5 = User.create!(first_name: 'Obi-Wan', last_name: 'Kenobi', email: 'obiwan_kenobi@starwars.com', description: 'Wise and skilled Jedi Master', password: '12345', userpic: "https://s3.amazonaws.com/questions-pro/users/obione.jpg")
# user6 = User.create!(first_name: 'Leia Amidala', last_name: 'Skywalker Organa Solo', email: 'leia@starwars.com', description: 'Luke Skywalker\'s sister and Han Solo\'s wife', password: '12345', userpic: "https://s3.amazonaws.com/questions-pro/users/leia.jpg")
# user7 = User.create!(first_name: 'Anakin', last_name: 'Skywalker', email: 'anakin_skywalker@starwars.com', description: 'aka Darth Vader', password: '12345', userpic: "https://s3.amazonaws.com/questions-pro/users/anakin.jpg")
# user8 = User.create!(first_name: 'Han', last_name: 'Solo', email: 'han_solo@starwars.com', description: 'Captain of the Millennium Falcon', password: '12345', userpic: "https://s3.amazonaws.com/questions-pro/users/hansolo.png")


user1 = User.create!(first_name: 'Padme', last_name: 'Amidala', email: 'padme_amidala@questions.com', description: 'Teenage queen', password: '12345')
# user1.userpic = File.open("app/assets/images/userpics/padme.jpg")
# user1.save!
user2 = User.create!(first_name: 'Jango', last_name: 'Fett', email: 'jango_fett@questions.com', description: 'Bounty hunter', password: '12345')
# user2.userpic = File.open("app/assets/images/userpics/jango.jpg")
# user2.save!
user3 = User.create!(first_name: 'Jabba', last_name: 'the Hutt', email: 'jabba_hutt@questions.com', description: 'Crime boss', password: '12345')
# user3.userpic = File.open("app/assets/images/userpics/jabba.jpg")
# user3.save!
user4 = User.create!(first_name: 'Qui-Gon', last_name: 'Jinn', email: 'quigon_jinn@questions.com', description: 'Jedi Master', password: '12345')
# user4.userpic = File.open("app/assets/images/userpics/quigon.png")
# user4.save!
user5 = User.create!(first_name: 'Obi-Wan', last_name: 'Kenobi', email: 'obiwan_kenobi@questions.com', description: 'Wise and skilled Jedi Master', password: '12345')
# user5.userpic = File.open("app/assets/images/userpics/obione.jpg")
# user5.save!
user6 = User.create!(first_name: 'Leia Amidala', last_name: 'Skywalker Organa Solo', email: 'leia@questions.com', description: 'Luke Skywalker\'s sister and Han Solo\'s wife', password: '12345')
# user6.userpic = File.open("app/assets/images/userpics/leia.jpg")
# user6.save!
user7 = User.create!(first_name: 'Anakin', last_name: 'Skywalker', email: 'anakin_skywalker@questions.com', description: 'aka Darth Vader', password: '12345')
# user7.userpic = File.open("app/assets/images/userpics/anakin.jpg")
# user7.save!
user8 = User.create!(first_name: 'Han', last_name: 'Solo', email: 'han_solo@questions.com', description: 'Captain of the Millennium Falcon', password: '12345', unread_messages: 5)
# user8.userpic = File.open("app/assets/images/userpics/hansolo.png")
# user8.save!
user9 = User.create!(first_name: 'Indiana', last_name: 'Jones', email: 'indiana_jones@questions.com', description: 'a fictional archaeologist', password: '12345')
# user9.userpic = File.open("app/assets/images/userpics/indiana_jones.jpg")
# user9.save!
user10 = User.create!(first_name: 'Forrest', last_name: 'Gump', email: 'forest_gump@questions.com', description: 'Life is like a box of chocolates', password: '12345')
# user10.userpic = File.open("app/assets/images/userpics/forrest_gump.jpg")
# user10.save!
user11 = User.create!(first_name: 'Chewbacca', last_name: 'Chewie', email: 'chewie@questions.com', description: 'Wookiee from the planet Kashyyyk', password: '12345')
# user11.userpic = File.open("app/assets/images/userpics/choobaka.jpg")
# user11.save!
user12 = User.create!(first_name: 'William', last_name: 'Wallace', email: 'william@questions.com', description: 'Scottish knight who became one of the main leaders during the Wars of Scottish Independence', password: '12345')
# user12.userpic = File.open("app/assets/images/userpics/william_wallas.jpg")
# user12.save!
user13 = User.create!(first_name: 'Ace', last_name: 'Ventura', email: 'ace@questions.com', description: 'private detective specializing in the retrieval of missing animals', password: '12345')
# user13.userpic = File.open("app/assets/images/userpics/ace_ventura.jpg")
# user13.save!
user14 = User.create!(first_name: 'Jack', last_name: 'Sparrow', email: 'sparrow@questions.com', description: 'Pirate Lord of the Caribbean Sea', password: '12345')
# user14.userpic = File.open("app/assets/images/userpics/jack_sparrow.jpg")
# user14.save!
user15 = User.create!(first_name: 'Tony', last_name: 'Montana', email: 'montana@questions.com', description: 'Drug Lord', password: '12345')
# user15.userpic = File.open("app/assets/images/userpics/tonny_montana.jpeg")
# user15.save!
user16 = User.create!(first_name: 'Rocky', last_name: 'Balboa', email: 'roky@questions.com', description: 'Professional boxer (retired), boxing trainer', password: '12345')
# user16.userpic = File.open("app/assets/images/userpics/rocky.jpeg")
# user16.save!
user17 = User.create!(first_name: 'Jeffrey', last_name: 'Lebowski', email: 'lebowski@questions.com', description: 'The Dude aka His Dudeness or El Duderino', password: '12345')
# user17.userpic = File.open("app/assets/images/userpics/lebowsky.jpg")
# user17.save!
user18 = User.create!(first_name: 'Freddy', last_name: 'Krueger', email: 'krueger@questions.com', description: 'The Springwood Slasher', password: '12345')
# user18.userpic = File.open("app/assets/images/userpics/fredy_kruger.jpg")
# user18.save!
user19 = User.create!(first_name: 'John', last_name: 'McClane', email: 'mcclane@questions.com', description: 'New York City Police Detective', password: '12345')
# user19.userpic = File.open("app/assets/images/userpics/mcclain.jpg")
# user19.save!
user20 = User.create!(first_name: 'James', last_name: 'Bond', email: 'bond@questions.com', description: 'British Secret Service agent ', password: '12345')
# user20.userpic = File.open("app/assets/images/userpics/james_bond.jpg")
# user20.save!
user21 = User.create!(first_name: 'Vito', last_name: 'Corleone', email: 'vito@questions.com', description: 'The Godfather', password: '12345')
# user21.userpic = File.open("app/assets/images/userpics/corleone.jpg")
# user21.save!
user22 = User.create!(first_name: 'Ethan', last_name: 'Hunt', email: 'hunt@questions.com', description: 'IMF Agent', password: '12345')
# user22.userpic = File.open("app/assets/images/userpics/hunt.jpeg")
# user22.save!
user23 = User.create!(first_name: 'Jason', last_name: 'Bourne', email: 'bourne@questions.com', description: 'Specialist in Far Eastern affairs', password: '12345')
user24 = User.create!(first_name: 'Frank', last_name: 'Drebin', email: 'frank@questions.com', description: 'Police officer', password: '12345')
# user24.userpic = File.open("app/assets/images/userpics/frank_drebin.jpg")
# user24.save!
user25 = User.create!(first_name: 'Harry', last_name: 'Potter', email: 'harry@questions.com', description: 'a half-blood wizard', password: '12345')
# user25.userpic = File.open("app/assets/images/userpics/potter.jpeg")
# user25.save!


Message.create!(author_id: user1.id, addressee_id: user8.id, title: "What is Lorem Ipsum?", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", unread: false)
Message.create!(author_id: user2.id, addressee_id: user8.id, title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", unread: false)
Message.create!(author_id: user15.id, addressee_id: user8.id, title: "Where does it come from?", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", unread: false)
Message.create!(author_id: user16.id, addressee_id: user8.id, title: "Why do we use it?", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
Message.create!(author_id: user9.id, addressee_id: user8.id, title: "", body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", unread: false)
Message.create!(author_id: user4.id, addressee_id: user8.id, title: "", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", unread: false)
Message.create!(author_id: user22.id, addressee_id: user8.id, title: "Where can I get some?", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", unread: false)
Message.create!(author_id: user22.id, addressee_id: user8.id, title: "", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", unread: false)
Message.create!(author_id: user20.id, addressee_id: user8.id, title: "", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", unread: false)
Message.create!(author_id: user4.id, addressee_id: user8.id, title: "", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", unread: false)
Message.create!(author_id: user15.id, addressee_id: user8.id, title: "", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", unread: false)
Message.create!(author_id: user18.id, addressee_id: user8.id, title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?")
Message.create!(author_id: user7.id, addressee_id: user8.id, title: "The standard Lorem Ipsum passage, used since the 1500s", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", unread: false)
Message.create!(author_id: user9.id, addressee_id: user8.id, title: "", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", unread: false)
Message.create!(author_id: user12.id, addressee_id: user8.id, title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", body: "The wise man therefore always holds in these matters to this principle of selection", unread: false)
Message.create!(author_id: user11.id, addressee_id: user8.id, title: "The wise man therefore always holds in these matters to this principle of selection", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
Message.create!(author_id: user12.id, addressee_id: user8.id, title: "", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
Message.create!(author_id: user15.id, addressee_id: user8.id, title: "On the other hand, we denounce with righteous indignation", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

Message.create!(author_id: user8.id, unread: false, addressee_id: user12.id, title: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.", body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.")
Message.create!(author_id: user8.id, addressee_id: user3.id, title: "Nor again is there anyone who loves", body: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.")
Message.create!(author_id: user8.id, unread: false, addressee_id: user19.id, title: "ed ut perspiciatis unde omnis iste natus error sit voluptatem", body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.")
Message.create!(author_id: user8.id, unread: false, addressee_id: user21.id, title: "How are you?", body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?")
Message.create!(author_id: user8.id, addressee_id: user14.id, title: "Hello!", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

# :userpic => File.open(File.join('http://apm-assets.s3.amazonaws.com', '/path/to/img.jpg')


# user1 = User.new(first_name: 'Padme', last_name: 'Amidala', email: 'padme_amidala@starwars.com', description: 'Teenage queen', password: '12345', :userpic => File.open(File.join('http://apm-assets.s3.amazonaws.com', '/questions-pro/users/padme.jpg')))
# # user1.userpic.options[:url] = 'https://s3.amazonaws.com/questions-pro/users/padme.jpg'
# # user1.save!
# user2 = User.new(first_name: 'Jango', last_name: 'Fett', email: 'jango_fett@starwars.com', description: 'Bounty hunter', password: '12345', :userpic => File.open(File.join('http://apm-assets.s3.amazonaws.com', '/questions-pro/users/jango.jpg')))
# # user2.userpic.options[:url] = 'https://s3.amazonaws.com/questions-pro/users/jango.jpg'
# # user2.save!
# user3 = User.new(first_name: 'Jabba', last_name: 'the Hutt', email: 'jabba_hutt@starwars.com', description: 'Crime boss', password: '12345', :userpic => File.open(File.join('http://apm-assets.s3.amazonaws.com', '/questions-pro/users/jabba.jpg')))
# # user3.userpic.options[:url] = 'https://s3.amazonaws.com/questions-pro/users/jabba.jpg'
# # user3.save!
# user4 = User.new(first_name: 'Qui-Gon', last_name: 'Jinn', email: 'quigon_jinn@starwars.com', description: 'Jedi Master', password: '12345', :userpic => File.open(File.join('http://apm-assets.s3.amazonaws.com', '/questions-pro/users/quigon.png')))
# # user4.userpic.options[:url] = 'https://s3.amazonaws.com/questions-pro/users/quigon.png'
# # user4.save!
# user5 = User.new(first_name: 'Obi-Wan', last_name: 'Kenobi', email: 'obiwan_kenobi@starwars.com', description: 'Wise and skilled Jedi Master', password: '12345', :userpic => File.open(File.join('http://apm-assets.s3.amazonaws.com', '/questions-pro/users/obione.jpg')))
# # user5.userpic.options[:url] = 'https://s3.amazonaws.com/questions-pro/users/obione.jpg'
# # user5.save!
# user6 = User.new(first_name: 'Leia Amidala', last_name: 'Skywalker Organa Solo', email: 'leia@starwars.com', description: 'Luke Skywalker\'s sister and Han Solo\'s wife', password: '12345', :userpic => File.open(File.join('http://apm-assets.s3.amazonaws.com', '/questions-pro/users/leia.jpg')))
# # user6.userpic.options[:url] = 'https://s3.amazonaws.com/questions-pro/users/leia.jpg'
# # user6.save!
# user7 = User.new(first_name: 'Anakin', last_name: 'Skywalker', email: 'anakin_skywalker@starwars.com', description: 'aka Darth Vader', password: '12345', :userpic => File.open(File.join('http://apm-assets.s3.amazonaws.com', '/questions-pro/users/anakin.jpg')))
# # user7.userpic.options[:url] = 'https://s3.amazonaws.com/questions-pro/users/anakin.jpg'
# # user7.save!
# user8 = User.new(first_name: 'Han', last_name: 'Solo', email: 'han_solo@starwars.com', description: 'Captain of the Millennium Falcon', password: '12345', :userpic => File.open(File.join('http://apm-assets.s3.amazonaws.com', '/questions-pro/users/hansolo.png')))
# user8.userpic.options[:url] = 'https://s3.amazonaws.com/questions-pro/users/hansolo.png'
# user8.save!


UserSubscribedTopic.create!(user_id: user8.id, topic_id: culture.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: technology.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: science.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: movies.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: books.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: health.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: music.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: education.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: business.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: food.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: travel.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: psychology.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: history.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: design.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: cooking.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: photography.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: sports.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: economics.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: writing.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: fashion.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: philosophy.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: finance.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: marketing.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: mathematics.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: politics.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: literature.id)
# UserSubscribedTopic.create!(user_id: user8.id, topic_id: children.id)






question1 = Question.create!(author_id: user1.id, topic_id: movies.id, body: 'What is it like working with Christopher Nolan?')
UserLikedQuestion.create!(user_id: user17.id, question_id: question1.id)
UserLikedQuestion.create!(user_id: user11.id, question_id: question1.id)
UserLikedQuestion.create!(user_id: user18.id, question_id: question1.id)
UserLikedQuestion.create!(user_id: user12.id, question_id: question1.id)
UserLikedQuestion.create!(user_id: user22.id, question_id: question1.id)
UserWatchedQuestion.create!(user_id: user8.id, question_id: question1.id)
UserWatchedQuestion.create!(user_id: user11.id, question_id: question1.id)
UserWatchedQuestion.create!(user_id: user12.id, question_id: question1.id)
UserWatchedQuestion.create!(user_id: user15.id, question_id: question1.id)
UserWatchedQuestion.create!(user_id: user19.id, question_id: question1.id)
UserWatchedQuestion.create!(user_id: user22.id, question_id: question1.id)
answer1 = Answer.create!(question_id: question1.id, author_id: user2.id, body: 'I think one of the things that is really great about working with Chris is that he doesn’t, in any way, get in the way of my imagination. In fact, he works very hard at not having me confined by the mechanics of filmmaking. So, our process is usually starting long conversations just riffing on ideas. Then slowly I start writing and experimenting, coming up with sounds, etc., all the while keeping in constant conversation with Chris. In Interstellar, for instance, there’re so many themes, so many pieces, which always got to a certain point during the writing process but never had an ending, because Chris and I would get to a certain point with an idea and then abandon it because we got excited about the next idea. You have to think of how Chris and I work as a sort of breathless, constant sprint because we are just trying to keep up with our own ideas. The ideas are so plentiful when Chris and I get together, but the execution always takes more time and it can be so frustrating. It’s sometimes very frustrating for him as well because he’s trying to make a movie and he’s waiting on the music. When it comes to the music for Interstellar, I can honestly say that in one way or another, the music is our music, not just my music. It’s entirely our music, and that’s a testament to how much I let Chris into my world. The great thing is that as a composer, you can only write from the heart and from your innermost place. So, you have to trust your director. And that’s the thing - there’s a great sense of trust and a great sense of balance that Chris brings to the composing process. Because Chris cuts his movies in his garage, (giving his films a sort of a homemade quality), he never makes me feel that I have the enormous weight of the canvas on my shoulders. His editing process is really helpful for my composing process. The work and the story is always brought back to the personal and the intimate, and that’s perfect for how I work.')
UserLikedAnswer.create!(user_id: user19.id, answer_id: answer1.id)
UserLikedAnswer.create!(user_id: user22.id, answer_id: answer1.id)
UserLikedAnswer.create!(user_id: user23.id, answer_id: answer1.id)


question2 = Question.create!(author_id: user2.id, topic_id: movies.id, body: 'What would\'ve happened if the Abomination had joined the Avengers instead of the Hulk?')
UserLikedQuestion.create!(user_id: user1.id, question_id: question2.id)
UserLikedQuestion.create!(user_id: user14.id, question_id: question2.id)
UserLikedQuestion.create!(user_id: user19.id, question_id: question2.id)
UserLikedQuestion.create!(user_id: user10.id, question_id: question2.id)
UserLikedQuestion.create!(user_id: user23.id, question_id: question2.id)
UserWatchedQuestion.create!(user_id: user18.id, question_id: question2.id)
UserWatchedQuestion.create!(user_id: user7.id, question_id: question2.id)
UserWatchedQuestion.create!(user_id: user9.id, question_id: question2.id)
UserWatchedQuestion.create!(user_id: user3.id, question_id: question2.id)
UserWatchedQuestion.create!(user_id: user19.id, question_id: question2.id)
UserWatchedQuestion.create!(user_id: user20.id, question_id: question2.id)
answer2 = Answer.create!(question_id: question2.id, author_id: user1.id, body: 'They would probably have to convince him to be a “good guy”. He would be social awkward and be disruptive to the team building chemistry they have. Also, he would. Ot he utilized for most missions. Good point: what did General Ross (now Secretary Ross) do with the Abomination? Now that he has his yellow Hulk, he should be happy. Again, I find it hard to believe that a disgraced Ross who dedtory d half of Harlem, would be ascend to such a prominent position in Captain America Civil War. He was probably castes because they don\'t want to waste such a fine actor in William Hurt')
UserLikedAnswer.create!(user_id: user19.id, answer_id: answer2.id)
UserLikedAnswer.create!(user_id: user22.id, answer_id: answer2.id)
UserLikedAnswer.create!(user_id: user23.id, answer_id: answer2.id)
UserLikedAnswer.create!(user_id: user9.id, answer_id: answer2.id)
UserLikedAnswer.create!(user_id: user2.id, answer_id: answer2.id)
UserLikedAnswer.create!(user_id: user13.id, answer_id: answer2.id)
answer3 = Answer.create!(question_id: question2.id, author_id: user3.id, body: 'The Abomination would have to have a big change of heart and attitude. From what I recall, he was originally a spy for the Warsaw Pact and a ruthless individual. The Avengers have taken reformed criminals in the past but reformed is the key word here. The advantage of having the Abomination is that he maintains his intelligence so he’d be better than the low-intelligence version of the Hulk.')
answer4 = Answer.create!(question_id: question2.id, author_id: user4.id, body: 'The only difference between Abomination and the Hulk is the Abomination wants to kill. Bruce Banner is usually a pacifist (unless he gets too angry and loses control). Emil Blonsky is a rogue soldier. He would not hesitate to turn into the Abomination and would defiantly betray the rest of the Avengers if he got the chance.')
UserLikedAnswer.create!(user_id: user19.id, answer_id: answer4.id)
answer5 = Answer.create!(question_id: question2.id, author_id: user5.id, body: 'He’d waste no time backstabbing the lot of them, whilst The World Security Council gush about how much of a war hero he is.')
UserLikedAnswer.create!(user_id: user9.id, answer_id: answer5.id)
UserLikedAnswer.create!(user_id: user21.id, answer_id: answer5.id)
UserLikedAnswer.create!(user_id: user3.id, answer_id: answer5.id)

question3 = Question.create!(author_id: user1.id, topic_id: movies.id, body: 'What is wrong with Vito Corleone\'s jaws?')
UserLikedQuestion.create!(user_id: user2.id, question_id: question3.id)
UserLikedQuestion.create!(user_id: user3.id, question_id: question3.id)
UserLikedQuestion.create!(user_id: user4.id, question_id: question3.id)
UserLikedQuestion.create!(user_id: user5.id, question_id: question3.id)
UserLikedQuestion.create!(user_id: user6.id, question_id: question3.id)
UserLikedQuestion.create!(user_id: user7.id, question_id: question3.id)
UserLikedQuestion.create!(user_id: user9.id, question_id: question3.id)
UserWatchedQuestion.create!(user_id: user10.id, question_id: question3.id)
UserWatchedQuestion.create!(user_id: user11.id, question_id: question3.id)
UserWatchedQuestion.create!(user_id: user12.id, question_id: question3.id)
UserWatchedQuestion.create!(user_id: user13.id, question_id: question3.id)
UserWatchedQuestion.create!(user_id: user14.id, question_id: question3.id)
UserWatchedQuestion.create!(user_id: user20.id, question_id: question3.id)
UserWatchedQuestion.create!(user_id: user8.id, question_id: question3.id)
UserWatchedQuestion.create!(user_id: user21.id, question_id: question3.id)
UserWatchedQuestion.create!(user_id: user22.id, question_id: question3.id)
answer6 = Answer.create!(question_id: question3.id, author_id: user8.id, body: 'Marlon Brando stuffed cotton wads into his cheeks slightly distending the walls of his mouth enabling him to assume the Don’s persona. There is nothing physically wrong with Brando’s mouth, you are just watching a consummate performance by a legendary actor. A small group of us went to see the Godfather during it’s opening week and we all were awed by the movie and it’s adherence to the book.')
UserLikedAnswer.create!(user_id: user7.id, answer_id: answer6.id)
UserLikedAnswer.create!(user_id: user6.id, answer_id: answer6.id)
UserLikedAnswer.create!(user_id: user5.id, answer_id: answer6.id)
UserLikedAnswer.create!(user_id: user16.id, answer_id: answer6.id)
UserLikedAnswer.create!(user_id: user25.id, answer_id: answer6.id)
UserLikedAnswer.create!(user_id: user24.id, answer_id: answer6.id)
answer7 = Answer.create!(question_id: question3.id, author_id: user7.id, body: 'The movie started from when Don Vito was an old and tired man. Look at him again…! It’s easy to assume that a character designer with some little knowledge about brain stroke guys would show Don Vito with paralyzed face muscles to induce viewers that he is very tired and old and as you said: “old, experienced ‘bulldog’, born on rural Sicily and after spending years of gang-related wars and stress, the solid ‘farm boy’”.')
UserLikedAnswer.create!(user_id: user1.id, answer_id: answer7.id)
UserLikedAnswer.create!(user_id: user2.id, answer_id: answer7.id)

question4 = Question.create!(author_id: user3.id, topic_id: movies.id, body: 'What do you think about the new Logan trailer?')
answer8 = Answer.create!(question_id: question4.id, author_id: user1.id, body: 'I love the music. I think it is safe to say that this movie is gonna be a high dose of hormones. Nostalgia, drama, suspense, action, romance and of course the journey of this hero from being hardcore to going soft and wise. Alright, alright, its Wolverine.. those claws won’t hide for too long.')
answer9 = Answer.create!(question_id: question4.id, author_id: user5.id, body: 'The trailer was kind of a very standard fare which showed a glimpse of what storyline to expect in the movie. However for me the highlight was the background Song “Hurt” by Johnny Cash. It seriously set a great mood for the trailer.')

question5 = Question.create!(author_id: user5.id, topic_id: books.id, body: 'Is it possible to read a 400-page book in one day?')
answer10 = Answer.create!(question_id: question5.id, author_id: user6.id, body: 'Absolutely, yes. In fact, reading hundreds of pages a day is one of the "secrets" of how Warren Buffett achieved his wealth. Here is Buffett\'s prescription for how others can go about learning how to become better investors: “Read 500 pages like this every day… That\’s how knowledge works. It builds up, like compound interest. All of you can do it, but I guarantee not many of you will do it.”')
answer11 = Answer.create!(question_id: question5.id, author_id: user7.id, body: 'It all depends on the information density of the material. Poetry or math is densely packed information, so for comprehension to mean anything, you have to slow down. However, I get the sense you\'re talking about novels. A page in a novel has around 250 words. That means a 400 page book would be around 100,000 words. I think average reading rate is about 200 wpm. You\'d finish in 500 minutes or a little over 8 hours, still well within a day.')
answer12 = Answer.create!(question_id: question5.id, author_id: user8.id, body: 'I read Crime and Punishment in one day, from early morning until very very late at night. The edition I had was 700 pages long. I was so hooked, that I just couldn\'t put it down. Not for one minute.')


question6 = Question.create!(author_id: user6.id, topic_id: books.id, body: 'Which is the most harmful book of all time?')
answer13 = Answer.create!(question_id: question6.id, author_id: user1.id, body: 'Malleus Maleficarum is in my opinion the most harmful book ever written. This book shows the various practices of witches and how to identify a woman as being a witch. This book was taken as truth by witch hunters across Europe and was used to prosecute and then execute witches based on their behaviour. Millions of women were murdered across Europe due to the panic of witchcraft and were often accused due to personal dislike. Enlgish villages were completely rid of their whole female population in many cases.')
answer14 = Answer.create!(question_id: question6.id, author_id: user3.id, body: 'I think the more dangerous book is Foundations of the Nineteenth Century by HS Chamberlain. It is a book crammed full of pseudo-science about white supremacism, specifically for Aryan Germans. Chamberlain was an English Germanophile who married Wagner\'s daughter, and his work had great influence on the biologically racist views of Karl Lueger, Hitler, and many other powerful Germans at the time. The views expressed in this book are horrifying for the historically minded reader, discussing false origin stories for the Hebrews and other early races. Often the stories are filled with anecdotes to prove the inferiority of mind and body possessed by the weaker races. I contend that this book made supremacy mainstream and encouraged the rise of Hitler and other anti-Semites throughout Europe.')
answer15 = Answer.create!(question_id: question6.id, author_id: user5.id, body: 'Books can\'t be harmful; it\'s just words on a page. If John tells Jim to kill Joe, and Jim kills Joe, it\'s still Jim\’s fault. That said, Hitler\’s Mein Kampf is probably the most harmful book as it actively incites nazi sentiment, which ultimately led to millions of deaths, but we can\'t blame the book itself for harms. People still have autonomy; liability can\'t be exonerated because of a book.')


question7 = Question.create!(author_id: user7.id, topic_id: books.id, body: 'What books should all highly gifted teenagers read?')
answer16 = Answer.create!(question_id: question7.id, author_id: user4.id, body: 'Sophie’s World by Jostein Gaarder is a “history of philosophy” that is written as a novel about a fifteen year-old girl in a very entertaining and engaging way. I’ve read it three, maybe four, times and I always enjoy it. The one thing that bugs me about it is that it is billed as a “history of philosophy” and completely ignores anything but western philosophy: If it didn’t happen west of Baghdad and east of Newfoundland, it didn’t happen. There were huge civilizations with a panoply of philosophies in Asia that happened long before and all during the rise of western philosophy and—believe it or not—continue to exist and comprise a rather huge majority of the worlds population. So, with that in mind, Sophie’s World is a wonderful introduction to philosophy and a really fun read.')
answer17 = Answer.create!(question_id: question7.id, author_id: user5.id, body: 'This answer may sound like an attempt at sarcasm, but I am very serious about this.  I would highly recommend “A Wrinkle in Time” by Madeleine L\'Engle.  Granted, the book is aimed toward an early teen audience, but I believe this book touches on so many relevant topics that it can promote some seriously critical thinking.')
answer18 = Answer.create!(question_id: question7.id, author_id: user8.id, body: '"Gifted" can mean just about anything. Read about whatever it is that interests you. Biographies are usually interesting. Read a lot and develop a lifelong habit. You\'ll discover the best and most useful books for your particular interests.')


question8 = Question.create!(author_id: user8.id, topic_id: books.id, body: 'Why do most high school students hate reading?')
answer19 = Answer.create!(question_id: question8.id, author_id: user1.id, body: 'I think your choice of "most" is erroneous. Most of them don\'t hate reading, but some of them hate reading what the schools make them read. Often the literature is irrelevant or is made uninteresting through the teaching methods. Somehow the reader can\'t or won\'t connect with the read, and each non-reader is different. Whether or not to read an assignment  depends as well on variables like what the student has to do after school; what the home life is like; how the student feels about the teacher or even the class as an entity, these kinds of things.')
answer20 = Answer.create!(question_id: question8.id, author_id: user5.id, body: 'Probably has something to do with literature that is far outside the high school students\' experience. In the US, Shakespeare is a staple of high school literature instruction but the language makes it less than understandable to many if most students.  There is a trend in some high schools to teach "young adult novels" that the average 14 to 18 year-old can relate to better. Also, with cell phones and video games, many young adults frequently lack the attention span to read novels of any weight. They prefer action films to drawing room comedies to use a film analogy.')
answer21 = Answer.create!(question_id: question8.id, author_id: user2.id, body: 'I am a high school student and I hate reading what they assign to read in school. However, on my free time, I try to read books that are actually interesting to me. Our education system consists of books from European authors. Does that mean that other part of this world does not exist? There are so many other books from around the world that students would love to read. In my opinion, students don’t actually “hate” reading books it’s just that the books that they are often assigned to read are not interesting.')


question9 = Question.create!(author_id: user1.id, topic_id: books.id, body: 'I feel like I\'m wasting my time when I\'m reading. Is that wrong?')
answer22 = Answer.create!(question_id: question9.id, author_id: user2.id, body: 'There is nothing wrong with reading, it is a great thing to do. It only is a problem if you are using reading to procrastinate a lot  as far as doing things you need to do. However, if you are not going out and meeting people, aren\'t getting social experiences, then you might want to work on getting out there a bit more. It sounds more like you just aren\'t a great conversationalist though. I used to be a terrible conversationalist. I still am sometimes, when I get hit with a moment of feeling intensely shy. It happens. 19 is very young. You will learn how to converse better with more experience. Don\'t be hard on yourself.')
answer23 = Answer.create!(question_id: question9.id, author_id: user3.id, body: 'Oh no! Reading is the process for cultivating mind. Half of our life in books\' written pages.  Moreover, words inspire and answers you really want to find are hidden in books.  It seems that you are addicted to books, may be your destiny is to become a famous writter? Try! Write and share your reading experience like literature critique. You can make an account here, for instance WordPress.com ')
answer24 = Answer.create!(question_id: question9.id, author_id: user4.id, body: 'You are over-thinking it! Just enjoy yourself! Seriously. You don\'t need to come up with answer to anyone. Just enjoy yourself with your reading and learning, and you already make your life and this world better.')

question10 = Question.create!(author_id: user2.id, topic_id: music.id, body: 'Why can\'t all people sing well?')
answer25 = Answer.create!(question_id: question10.id, author_id: user4.id, body: 'The brains of bad singers may be to blame for their inability to hit the right pitch.It took many years of musical training for me to realize just how bad my singing voice is. I’m a respectable musician when I play a guitar, mandolin or other stringed instrument. But when I open my mouth, a cacophony comes out.')
answer26 = Answer.create!(question_id: question10.id, author_id: user5.id, body: 'Everyone can learn to sing. Only about 3 percent of the world\'s population is legitimately gone deaf. Everyone else just needs training. Some students have more raw skill when they start lessons but anyone can learn with the right teacher.')
answer27 = Answer.create!(question_id: question10.id, author_id: user6.id, body: 'Singing is a talent that rusts more and more through time and less practice. People who are inclined at singing most probably got exposed to music early in their lives. An environment with people skilled in music helps as well. Singing is something that can be learned. No one is born bearing musical talent immediately.')
answer28 = Answer.create!(question_id: question10.id, author_id: user7.id, body: 'All people can\'t sing well because their mind is not mapped in that way that can facilitate singing. Singing like any other activity require proper neural connections inside the brain like catching a ball requires coordination of your eyes with movement of your hands in same way singing requires coordination of your hearing power with vocal chords. That\'s why all people can\'t sing well but you can develop habit of singing by practicing just like you practiced catching a ball when you were young.')


question11 = Question.create!(author_id: user3.id, topic_id: music.id, body: 'What is the saddest Eminem song?')
answer29 = Answer.create!(question_id: question11.id, author_id: user4.id, body: 'Mockingbird. There\'s a part that I find really sad where Eminem talks about one Christmas where he didn\'t have any money and Kim bought some presents and put them under the tree and told the kids some of them were from Eminem. He says he\'ll never forget that Christmas because he sat up all night crying.')
answer30 = Answer.create!(question_id: question11.id, author_id: user5.id, body: 'The saddest song I\'ve heard period has to be Difficult by Eminem. Almost brought tears to my eyes. You can really hear the pain in his voice as he\'s singing about Proof.')


question12 = Question.create!(author_id: user4.id, topic_id: music.id, body: 'Is there a certain song that brings you extreme nostalgia? Why?')
answer31 = Answer.create!(question_id: question12.id, author_id: user1.id, body: 'Life in a Northern Town, by The Dream Academy, and I believe I am not alone in this. Perhaps it\'s the "heya mama" chorus, or the oboe; but the lyrics are just crazy evocative and nostalgia-laden: "in winter 1963, it felt like the world would freeze, and John F. Kennedy and The Beatles..."')
answer32 = Answer.create!(question_id: question12.id, author_id: user7.id, body: 'Don\'t Stop Believin\’ by Journey. Almost every bus ride for the first 2 years in XC the entire team would sing it on the bus ride back from a meet. We would sing it after we did well at league meets and invitational\'s. Whenever I hear it I\'m 14 again singing off key in the back of the bus with my teammates.')
answer33 = Answer.create!(question_id: question12.id, author_id: user8.id, body: 'Any number of Bob Dylan songs, because I was really into his music when I fell in love for the first time…and second time. The 2 most intense “loves” in my life. Mr. Tambourine Man, and a little-known Dylan song called Up To Me, take me right back to each lovely lady, and put them in my arms. But these songs also bring the bitterness and sadness to the surface too.')


question13 = Question.create!(author_id: user5.id, topic_id: music.id, body: 'Who is the most skilled guitarist of all time?')
answer36 = Answer.create!(question_id: question13.id, author_id: user4.id, body: 'Hendrix is truly the most innovational rock guitarist of all time. Single handedly defining Hard Psychadelic Rock, Hendrix combined incredible proficiency and creativity to produce the recognizable and brilliant sound that was "The Jimi Hendrix Experience." His riffs were crazy enough to melt your face, but he also played with immense heart and soul which makes him the greatest guitar player ever. Tracks like "Fire" and "Purple Haze" are one of a kind songs created by a one of a kind musician. THANK YOU JIMI, REST IN PEACE.')
answer37 = Answer.create!(question_id: question13.id, author_id: user6.id, body: 'I don’t believe there’s just one greatest guitarist. Since it’s such a versatile instrument, there are probably many techniques even a master didn’t learn because they weren’t required for his/her playing style. I’d say for each version of the guitar, there are different people who can be called “the most skilled”.')
answer38 = Answer.create!(question_id: question13.id, author_id: user3.id, body: 'Definitely it is a question whose various answers will start fights in the comments section. I\'d say it\'s a draw between Shawn Lane and Guthrie Govan. I personally feel that the word ‘mind blowing’ is there just to describe these guys. Do hear them out.')


question14 = Question.create!(author_id: user6.id, topic_id: business.id, body: 'What are some companies making tons of money but are unknown to most people?')
answer39 = Answer.create!(question_id: question14.id, author_id: user1.id, body: 'Givaudan - Swiss manufacturer of flavors and fragrances.  I guess the description is self-explanatory.  The company designs the flavors and fragrances that go into food and beverages, perfumes, etc.  They (and their close competitors) own the recipe for most of what you eat, drink and smell everyday.  60 minutes has an episode on this company (The Flavorists: Tweaking tastes and creating cravings).  Op Income ~US$900mm.  Other players include Symrise and IFF.')
answer40 = Answer.create!(question_id: question14.id, author_id: user2.id, body: 'CSL/Baxter/Grifols - Blood spinners.  In simple terms, they collect blood from people, put it in a centrifuge, spin the blood and separate it into different components (albumin, immunoglobulin, etc.).  Each component is sold for different purposes.  Years ago, when the CEO of Grifols (a Spanish company) told me they go around and pay eur 5 to collect blood from students in Spain, spin and sell it for multiples of that, I fell in love with the biz.  Op Income ~US$1,100-1,600mm.  CSL, Baxter and Grifols are close competitors.')
answer41 = Answer.create!(question_id: question14.id, author_id: user3.id, body: 'Praxair - Air spinners (and you thought blood spinning was a good biz).  They are an industrial gas company that takes \'air\', cools it, and spins it into different components (oxygen, nitrogen, etc.).  Each component is sold for different purposes.  And you thought you can\'t make money out of \'thin air\'.  How awesome is selling air?  Op Income  ~US$2,400mm.  Linde is a close competitor.')
answer42 = Answer.create!(question_id: question14.id, author_id: user4.id, body: 'American Tower - mobile communication infrastructure company.  They build and own 100,000+ ~60ft towers (simple steel poles) around the world, primarily in the US.  They enter long term contracts to allow telcos (AT&T, Verizon, etc.) to put antennae on their tower in exchange for a rent.  Once a tower is erect, they have an effective mini-monopoly for coverage in that area (generally not economical for a new entrant).  And as data consumption increases, there is a need for higher tower/antenna density.  Do you think people will be consuming more mobile data in the future?  Me too, sounds like they have a bright future ahead.  Op Income ~1,900mm.  Other players include SBA, Crown Castle.')


question15 = Question.create!(author_id: user7.id, topic_id: business.id, body: 'How can I create and sell a drop-shipping business?')
answer43 = Answer.create!(question_id: question15.id, author_id: user5.id, body: 'Drop shipping is a fulfillment model that allows you to buy products individually from a wholesaler and ship them directly to your customer. Instead of purchasing a large amount of inventory, you simply partner with a drop shipping supplier and list their merchandise for sale. Then, once you receive an order you forward it to the supplier for fulfillment. The supplier will ship the product directly from their warehouse to your customer, and charge you only for the price of the shipped item. Some portals will have different services related to “For the discerning exporter and importer, The Dollar Business brings the CONNECT Programme – the most efficient and effective enabler of business beyond boundaries. It’s the one programme that will help distinguish leaders from masses.” It may possible that those expert term will help you out in clearing your doubts. Approach them.')


question16 = Question.create!(author_id: user8.id, topic_id: business.id, body: 'When applying for a job and you figured out the email of the CEO, is it better to send your application directly to the CEO?')
answer44 = Answer.create!(question_id: question16.id, author_id: user6.id, body: 'In most cases, you\'ll be considered a pain and cause slight frustration. If you found it so easily, I\'m sure someone else did as well. Send your resume the way they\'ve asked you to. Send it to HR or through the open positions page. At most, their general email.')
answer45 = Answer.create!(question_id: question16.id, author_id: user7.id, body: 'That really depends on the size of the company. If it is a smaller operation (under 25 employees for example) then that may be beneficial because the CEO is probably much more connected to the staff. Regardless, it\'s also annoying to go to a busy CEO who\'s already allocated staff and systems specifically for hiring, so they don\'t have to deal with that.')
answer46 = Answer.create!(question_id: question16.id, author_id: user1.id, body: 'Ceo in 95 % of cases never read his official mails directly. He is having assistant for that. Mostly mails got filtered through to him. As daily thousands of mails are marked to him. Against strict rules are applied to his email Id to keep his mailbox clean. So your chances of sending your resume to him are very small. Even if it reached to him he will never reply to you, instead he will forward mail to hr if he is in very good mood, otherwise it will go to trash directly.')


question17 = Question.create!(author_id: user1.id, topic_id: business.id, body: 'Why do most "boring" businesses make a lot of money?')
answer47 = Answer.create!(question_id: question17.id, author_id: user2.id, body: 'Because boring also means it works. It’s the same reason why you invest in blue chip stocks or diversified portfolios when you want to make money for retirement. You aren’t looking to do anything high risk. You just want to invest. Make your return. Move on. Same thing in the proven business model area. People who get into it know exactly what it does and they are happy with that fact. They aren’t looking to change the world or make some kind of revolutionary product. That being said even boring businesses can fail too. The reason being is because proven business models are also expensive to get into because everyone knows the value of them. So if you don’t have the capital to make it work, you can easily find yourself in a whole even with a working business model.')
answer48 = Answer.create!(question_id: question17.id, author_id: user5.id, body: 'Because “sexy” businesses attract too much attention and people are willing to bid down their ROI to be a part of it and its prestige. There’s a reason why video game programmers have lower salaries and worse work environments than people programming database software. Who says to themselves “When I grow up, I want to program ERP solutions for the downstream oil market”? Therefore, you have to pay someone more to do that over following their childhood dreams of making awesome AAA video games like the ones they played as a kid. The same logic follows in businesses.')



# culture

question18 = Question.create!(author_id: user10.id, topic_id: culture.id, body: 'What is Critical Race Theory?')
answer49 = Answer.create!(question_id: question18.id, author_id: user1.id, body: 'Critical Race Theory is a neo-Marxian critique model or philosophy, with a focus on racial issues (e.g. within a larger system or society) Specifically, it is part of a movement that is often labeled as “intersectional” activism. This was largely borne out of the New Left tradition, and ultimately with roots going back to the Frankfurt School. However, it has been streamlined for the modern era. It is promoted heavily in left-leaning and race-focused media outlets and in academic settings, where it is passed off as the continuation of a broad civil rights movement or straight-forward racial activism. In fact, many proponents are either unaware of its roots or foundational principles or they try to obscure it. They’ll use a cover of “social justice”….that they are simply activists. \n In fact, people that might not bat an eye at the term CRT may not have even looked up Critical Theory.')
comment1 = Comment.create!(answer_id: answer49.id, author_id: user11.id, body: "There's two other things from the Wikipedia article on CRT that I'd like to know more about: \\n - The emphasis on narrative over analysis \\n - The pursuit of legal remedies \\n \\n Neither of those sound particularly Critical Theory or Marxist to me. Where did they come from, and how do they play out?")
comment2 = Comment.create!(answer_id: answer49.id, author_id: user3.id, body: "How much is the term actually used? I’ve heard it mostly from critics.")
answer50 = Answer.create!(question_id: question18.id, author_id: user15.id, body: 'Critical theory is derived from, and is a broadening of Marxist social critique. You can read the academic meaning of critical theory here, but there\'s a lot of gobbledygook. Like a lot of social science writing, it uses a lot of big words to describe very little substance. It can be best described as “bullshit baffles brains”. Here’s the essence: It is born of the notion that there are groups in society (formerly “classes”) which are necessarily in conflict with each other.
The problem for Marxists, even as early as the 1930s, is that the industrial revolution brought unprecedented wealth to large numbers of people, creating, in western societies at least, a viable and growing middle class (what Marx called the “bourgeoisie”). This class, he knew, would always be opposed to revolution, because they had too much to protect. The Neo-Marxists had to figure out some other way to get groups of people mad at other people. This was the answer for the time.
There are numerous dimensions through which one can apply critical theory - class (of course), race, sex, ethnicity, (dis-) ability, sexual orientation - even language. It’s all about which group is the oppressor, and which is the oppressed.
The underlying ideas were formed back in Germany in the 1930s, which might give you some idea of their actual use and applicability.')
answer51 = Answer.create!(question_id: question18.id, author_id: user11.id, body: 'Critical Race Theory is about systemic and institutionalized racism in societies. It looks at how marginalized groups are affected by discrimination in cultural, social, and legal systems. It combines philosophy, sociology, and law to follow, track, and analyze the evolution of racism throughout a society\'s history, including what factors allow racism to still exist.')
answer52 = Answer.create!(question_id: question18.id, author_id: user19.id, body: 'It’s a consolidated pseudoacademic theory of oppression/victimization based on melanin content of skin and may be one of the principle reasons why Donald Trump is the next US President and not somebody who isn’t a thin-skinned narcissistic man-child.
Combined with intersectionality, third-wave feminism and neo-Marxism and an overwheening sense of privilege to shutdown anyone else’s point of view that conflicts with your own and you have a fun way to be as disruptive as possible at college and it’s everybody else’s fault.
When you leave college with your degree you have a fully-protective coat of near impenetrable victimhood and anti-white, anti-male, anti-Western prejudice that will see your resume canned by prospective employers quicker than a baked bean at a Heinz convention. Which of course will be interpreted as oppression by the white supremacist Patriarchy rather than an understanding that you’re a walking legal liability who everybody else hates to work with.
Apart from that, it’s fascinating.
Would you like fries with that?')
answer53 = Answer.create!(question_id: question18.id, author_id: user22.id, body: 'Critical Race Theory is essentially the analysis of race from a legal point of view. For racism to be stemmed nationally, at a macro level, this kind of analysis is crucial. I find CRT interesting because it is multidisciplinary; questions that a CRT scholar might ask include: How does racial identity shape another’s perception? And to what extent is this perception an attenuation of a potentially criminal act? Some specific issues might include eminent domain for undocumented immigrants, affirmative action and meritocracy, and personal bias from people in positions of authority. (and many more!)
Analysis of these issues from a pragmatic, legal standpoint is a crucial counterpart to grassroots social justice movements by citizens. The two together make for a balanced, nuanced approach to dealing with the multifaceted issue of race in the US.')


# answer50 = Answer.create!(question_id: question18.id, author_id: user11.id, body: '')
# comment1 = Comment.create!(answer_id: answer49.id, author_id: user11.id, body: '')

question19 = Question.create!(author_id: user21.id, topic_id: culture.id, body: 'Do religion and culture unite or divide a society?')
answer53 = Answer.create!(question_id: question19.id, author_id: user14.id, body: 'it is the behaviour of society who interprets religion and culture wrongly and harm the society mostly they think they are more powerful and do the wrongs in the name of religion and culture.')
answer54 = Answer.create!(question_id: question19.id, author_id: user13.id, body: 'Religion. preferably organized , divides people. They have dogma or required beliefs for membership, in their creed. It is required for entrance. There is no free will. Once you enter you are not allowed to exit, depending on what type of religion. Abrahamism of the Islamic variety is the most tough and least accommodative. Of course it divides society,
Culture is different. A common culture will let different religions coexist, the best example being civilizations based on Dharma, like Jainism, Buddism and Brahmanism, variations of philosophy. Existence of gods is simply a question. You can choose what you need. Atheism is also allowed. You can believe in god, goddess or anything you can think of if it helps you. There is no central authority. Hindu Dharma is super secular in spirit.
India did not become secular in 1945 after independence from the British. It was fully secular 3000years ago. South East Asia has absorbed the same ideas and culture. It is the sole example of this secularism right from the start.')
answer55 = Answer.create!(question_id: question19.id, author_id: user15.id, body: 'It unites a group of people but divides humanity.What we fail to understand is culture or religion is something which people created. It\'s nothing but one\'s way of living. When few people get together they tend to do similar things as a group. Their actions becomes their culture. Another set of people who are not aware of the previous set finds some other way of doing things and defines it as their religion, culture. This happens because our world is so huge and people are spread over in all places. The day we realize this, humanity will be united.  Until then there will be wars all across the world over who is great, whose culture is great, whose religion is great!')


# sports
# answer50 = Answer.create!(question_id: question18.id, author_id: user11.id, body: '')
# comment1 = Comment.create!(answer_id: answer49.id, author_id: user11.id, body: '')

question21 = Question.create!(author_id: user2.id, topic_id: sports.id, body: 'Should you always play to win the game?')
UserLikedQuestion.create!(user_id: user24.id, question_id: question21.id)
UserLikedQuestion.create!(user_id: user15.id, question_id: question21.id)
UserLikedQuestion.create!(user_id: user12.id, question_id: question21.id)
UserLikedQuestion.create!(user_id: user5.id, question_id: question21.id)
answer76 = Answer.create!(question_id: question21.id, author_id: user11.id, body: 'Yes. I think it takes a story to help you see. You don’t want to win all the time if you want your life to be interesting and challenging. Neither should your opponent. If you have an opponent who hates to lose, that’s not a happy place to be. So you play to win.')
answer77 = Answer.create!(question_id: question21.id, author_id: user14.id, body: 'It depends. Are you a professional player of the game? If so, then your career depends on you winning the game, so yes you should play to win. If you are a casual player, as in not a professional, then playing the game is meant to be an enjoyment. So your main goal should be to play for fun. Sometimes, the best way to have fun in a game is to win. When I\'m playing games, sometimes I lose, but had more fun than the person who won. In those cases, I consider it a success.')
UserLikedAnswer.create!(user_id: user18.id, answer_id: answer77.id)
UserLikedAnswer.create!(user_id: user9.id, answer_id: answer77.id)
answer78 = Answer.create!(question_id: question21.id, author_id: user16.id, body: 'Most of it depends on the situation or whether or not you’re a professional at the game you play. But I believe that you should always play to win. Say for example you want to try something new and you’re unfamiliar with how it works, it’s understandable that there’s a higher chance of you losing but if you don’t aim to do your best you wouldn’t know if that strategy will work or not.')
answer79 = Answer.create!(question_id: question21.id, author_id: user5.id, body: 'If the “game” can only conclude by the determinaction of a winner, then of course you should play to win. I cannot think of any reason to ever want to lose on purpose. As for the "lose the battle, win the war” tactic goes, the point is ultimately to win. Honesty, other than to have hits on your profile, I can\'t understand how this question ever needed an answer')
answer80 = Answer.create!(question_id: question21.id, author_id: user24.id, body: 'It depends on what type of game your playing. If it\'s a competitive sporting game I would answer yes. You don\'t want to lose on purpose that wouldn\'t be fair to yourself, or your opponent. Now if it\'s a game to play for entertainment purposes, or just fun. In my opinion I wouldn\'t think it mattered since your just occupying time, but games are made for someone to win or lose.')
UserLikedAnswer.create!(user_id: user19.id, answer_id: answer80.id)
UserLikedAnswer.create!(user_id: user22.id, answer_id: answer80.id)
UserLikedAnswer.create!(user_id: user23.id, answer_id: answer80.id)


question22 = Question.create!(author_id: user12.id, topic_id: sports.id, body: 'How should I go about starting a fitness/sports event business?')
UserLikedQuestion.create!(user_id: user17.id, question_id: question22.id)
UserLikedQuestion.create!(user_id: user11.id, question_id: question22.id)
UserLikedQuestion.create!(user_id: user22.id, question_id: question22.id)
UserLikedQuestion.create!(user_id: user25.id, question_id: question22.id)
UserLikedQuestion.create!(user_id: user23.id, question_id: question22.id)
answer65 = Answer.create!(question_id: question22.id, author_id: user6.id, body: 'From my point of view, before starting any kind of a business it is crucial to prepare a business plan. Even if you are not looking for investments, you should still have it. It will help you to plan your future business in details, do research on the market you are planning to step in, think of building your financial projections to see if you can reach the profit the way you expect, etc.')
UserLikedAnswer.create!(user_id: user12.id, answer_id: answer65.id)
UserLikedAnswer.create!(user_id: user14.id, answer_id: answer65.id)
UserLikedAnswer.create!(user_id: user1.id, answer_id: answer65.id)
answer66 = Answer.create!(question_id: question22.id, author_id: user9.id, body: 'Start hosting classes or events, grow your audience and then start selling packages. You have to give a lot in order to get paid on the back end of starting your own business.')
UserLikedAnswer.create!(user_id: user4.id, answer_id: answer66.id)
UserLikedAnswer.create!(user_id: user6.id, answer_id: answer66.id)
answer67 = Answer.create!(question_id: question22.id, author_id: user19.id, body: 'Initially, you need to sort out your branding and create a Facebook page. Secondly, work out where you’ll be hosting these events. Thirdly, join your local chamber of commerce, go to local networking events, join fitness related facebook groups and start trying to gain some publicity. And finally, host amazing events that people will talk about. Easier said than done. Good luck')
UserLikedAnswer.create!(user_id: user16.id, answer_id: answer67.id)


question23 = Question.create!(author_id: user6.id, topic_id: sports.id, body: 'Why is cross country a sport and how do you play it?')
UserLikedQuestion.create!(user_id: user16.id, question_id: question23.id)
UserLikedQuestion.create!(user_id: user23.id, question_id: question23.id)
UserLikedQuestion.create!(user_id: user17.id, question_id: question23.id)
UserLikedQuestion.create!(user_id: user19.id, question_id: question23.id)
answer68 = Answer.create!(question_id: question23.id, author_id: user18.id, body: 'Having run it for 8 years in high school and college, I can confidently tell you it\'s not a sport. It\'s a race. Like swimming. Or NASCAR. And there\'s nothing wrong with that. However I can\'t accurately describe how you play cross country. You just run, man.')
answer69 = Answer.create!(question_id: question23.id, author_id: user13.id, body: 'It\'s more of a competition than a sport. I run XC and track in high school and the scoring in high school is pretty simple. You add up the places of your top 5 runners on your team and the team with the lowest score wins. This is a very simple explanation because there are a few special cases that can happen and special rules apply.')
UserLikedAnswer.create!(user_id: user18.id, answer_id: answer69.id)
UserLikedAnswer.create!(user_id: user12.id, answer_id: answer69.id)
answer70 = Answer.create!(question_id: question23.id, author_id: user4.id, body: 'Your competing against others. You have teammates. There is a winner and a loser.')
UserLikedAnswer.create!(user_id: user18.id, answer_id: answer70.id)
UserLikedAnswer.create!(user_id: user12.id, answer_id: answer70.id)
UserLikedAnswer.create!(user_id: user19.id, answer_id: answer70.id)
UserLikedAnswer.create!(user_id: user14.id, answer_id: answer70.id)

# answer50 = Answer.create!(question_id: question18.id, author_id: user11.id, body: '')
# comment1 = Comment.create!(answer_id: answer49.id, author_id: user11.id, body: '')
question24 = Question.create!(author_id: user16.id, topic_id: sports.id, body: 'What\'s the best martial arts?')
UserLikedQuestion.create!(user_id: user7.id, question_id: question24.id)
UserLikedQuestion.create!(user_id: user23.id, question_id: question24.id)
UserLikedQuestion.create!(user_id: user5.id, question_id: question24.id)
UserLikedQuestion.create!(user_id: user2.id, question_id: question24.id)
UserLikedQuestion.create!(user_id: user15.id, question_id: question24.id)
UserLikedQuestion.create!(user_id: user24.id, question_id: question24.id)
UserLikedQuestion.create!(user_id: user17.id, question_id: question24.id)
UserLikedQuestion.create!(user_id: user19.id, question_id: question24.id)
answer71 = Answer.create!(question_id: question24.id, author_id: user12.id, body: 'If I had a dollar for every time someone has asked me this... Look mate, there is no one martial art that is better than all the rest. If you see a guy from one martial art losing to a guy from another, then, like Man Ip said, “The person has lost, not the art”. All martial arts can be used to defend yourself and all of them have their strengths and weaknesses. For example, a Taekwondoist has amazing kicks but would easily be taken down, a wrestler might be able to take a person down and finish them there but would get knocked out if he tried to strike with a skilled striker etc. So the best way to become a good, complete fighter, is to train multiple martial arts that deal with both grappling and striking. That way you have no weaknesses. “Use no way as a way, have no limitation as a limitation” - Bruce Lee')
UserLikedAnswer.create!(user_id: user18.id, answer_id: answer71.id)
UserLikedAnswer.create!(user_id: user8.id, answer_id: answer71.id)
UserLikedAnswer.create!(user_id: user3.id, answer_id: answer71.id)
answer72 = Answer.create!(question_id: question24.id, author_id: user15.id, body: 'No martial arts is the best. Each has it’s own systematic flaws. Doesn’t matter how much martial arts you know, if you don’t train realistically and abide by principles then it’s worthless. ')
UserLikedAnswer.create!(user_id: user3.id, answer_id: answer72.id)
answer73 = Answer.create!(question_id: question24.id, author_id: user10.id, body: 'There truly is no best martial art. No art adequately addresses all of the scenarios one may run into on the street. If you are looking for the best one to study, you have to match the art to your physical abilities, limitations and your own personality. Again, there is not one best martial art that suits everyone. It truly isn\'t the martial art that makes it great, it is the martial artists.')
answer74 = Answer.create!(question_id: question24.id, author_id: user15.id, body: 'The most complete is Tai Jitsu.')
answer75 = Answer.create!(question_id: question24.id, author_id: user17.id, body: 'The one practiced the most')
UserLikedAnswer.create!(user_id: user12.id, answer_id: answer75.id)
UserLikedAnswer.create!(user_id: user18.id, answer_id: answer75.id)
UserLikedAnswer.create!(user_id: user13.id, answer_id: answer75.id)

question25 = Question.create!(author_id: user25.id, topic_id: sports.id, body: 'Who do you think will win the Super Bowl in 2017? Why?')
UserLikedQuestion.create!(user_id: user18.id, question_id: question25.id)
UserLikedQuestion.create!(user_id: user8.id, question_id: question25.id)
UserLikedQuestion.create!(user_id: user12.id, question_id: question25.id)
UserLikedQuestion.create!(user_id: user13.id, question_id: question25.id)
UserLikedQuestion.create!(user_id: user7.id, question_id: question25.id)
UserLikedQuestion.create!(user_id: user9.id, question_id: question25.id)
UserLikedQuestion.create!(user_id: user22.id, question_id: question25.id)
UserLikedQuestion.create!(user_id: user20.id, question_id: question25.id)
UserLikedQuestion.create!(user_id: user10.id, question_id: question25.id)
answer57 = Answer.create!(question_id: question25.id, author_id: user5.id, body: 'New England Patriots. The old saying goes, “Offense wins games. Defense wins championships.” Atlanta may have the better offense overall, but the Patriots have the better defense (+ Tom Brady on offense). Although I’m rooting for the Falcons personally, I think the Patriots will pull it out')
UserLikedAnswer.create!(user_id: user1.id, answer_id: answer57.id)
UserLikedAnswer.create!(user_id: user3.id, answer_id: answer57.id)
UserLikedAnswer.create!(user_id: user15.id, answer_id: answer57.id)
UserLikedAnswer.create!(user_id: user20.id, answer_id: answer57.id)
answer58 = Answer.create!(question_id: question25.id, author_id: user7.id, body: 'At this point, it\'s the Patriots to lose. They have a clear route to the AFCCG, and homefield advantage. NFC could go to anybody. Fucking playoff monsters like Rodgers and Eli, Seahawks inconsistent as f**k, even Detroit is sneaky good, and of course, Dallas and the Falcons, juggernaut offenses.')
UserLikedAnswer.create!(user_id: user17.id, answer_id: answer58.id)
UserLikedAnswer.create!(user_id: user23.id, answer_id: answer58.id)
answer59 = Answer.create!(question_id: question25.id, author_id: user22.id, body: 'The Patriots. Tom Brady is on a mission this year: to have the spiteful scumbag Roger Goodell commissioner of the NFL (no fun league) hand him and the rest of the Pats the Lombardi Trophy in February. While Gronk may be hurt, having Julian Edelman, Martellus Bennett, and newly acquired Michael Floyd will allow their offense to score with ease. Defensively, they have been dominant (Malcolm ßButler looks like a shut down corner these days). And they will have home field advantage which is always nice. The onlt scenario where I could see the Pats having trouble is if Eli and the Giants somehow make it back to the Super Bowl. Pats have yet to get revenge for those 2 losses but the chances of a rematch are slim so Pats are gonna win in 2017.')
UserLikedAnswer.create!(user_id: user12.id, answer_id: answer59.id)
UserLikedAnswer.create!(user_id: user13.id, answer_id: answer59.id)
UserLikedAnswer.create!(user_id: user15.id, answer_id: answer59.id)
UserLikedAnswer.create!(user_id: user2.id, answer_id: answer59.id)
answer60 = Answer.create!(question_id: question25.id, author_id: user21.id, body: 'New England Patriots. If you look through history, the number one defence has shut down the number one offence for 5 out of 6 times. Matt Ryan is playing like an MVP but he is still bound to make mistakes. Tom Brady has been to many super bowls already; he has had experience. The Patriots won\'t let any advantage slip away. They are going to make use of Matt Ryans\' mistakes. Brady and Blount are playing very well and will easily pound and pummel the Falcons defence. A definite New England win.')
UserLikedAnswer.create!(user_id: user14.id, answer_id: answer60.id)
UserLikedAnswer.create!(user_id: user21.id, answer_id: answer60.id)
answer61 = Answer.create!(question_id: question25.id, author_id: user15.id, body: 'New England will slow down Atlanta\'s explosive offense by keeping the play in front of their defense (stopping the big play) and by effective defensive scheming & tackling. They will make QB Matt Ryan uncomfortable and limit his opportunities to put points on the board. On the offensive side, they will soften the Atlanta defense up with their big, talented runnining back and through running backs catching the ball out of the backfield. They will further stymie the Falcons defense by creatively finding seems for their many talented receivers. All told- Atlanta will be contiually trying to figure New England out while the Patriots will be better prepared to stop Atlanta strengths (imo).')
UserLikedAnswer.create!(user_id: user10.id, answer_id: answer61.id)
UserLikedAnswer.create!(user_id: user3.id, answer_id: answer61.id)
answer62 = Answer.create!(question_id: question25.id, author_id: user11.id, body: 'I think the Patriots will win Super Bowl 51, because 1.They have the experience. 2.They have the greatest Quarterback of all time in Tom Brady. 3.They have the #1 scoring defense in the NFL. 4.They didn’t miss a beat without their best player that’s not named Tom Brady. 5.The team that most people think will go against them, the Dallas Cowboys have a rookie as their starting quarterback in Dak Prescott, but he has been absolutely remarkable this year, and rookie quarterbacks have never won a Super Bowl, but then again, there is always a first time for everything.')
answer63 = Answer.create!(question_id: question25.id, author_id: user7.id, body: 'Well…the metrics suggest Atlanta, BUT, anyone trying to make a living betting against Belichick/Brady for the last 15 years is currently living under a bridge so…bet the Vegas way, would be my suggestion.')
comment3 = Comment.create!(answer_id: answer63.id, author_id: user11.id, body: 'You can’t just throw out a vague assertion about “the metrics” favoring the Falcons, particularly when the Vegas oddsmakers have them as 3-point underdogs. Name your specific metrics and provide citations for what is at least a controversial claim; if you can’t do so, the logical conclusion is that you are biased and slightly delusional.')
answer64 = Answer.create!(question_id: question25.id, author_id: user17.id, body: 'It’s hard to bet against the New England Patriots with Tom Brady.')



# photography
# answer50 = Answer.create!(question_id: question18.id, author_id: user11.id, body: '')
# comment1 = Comment.create!(answer_id: answer49.id, author_id: user11.id, body: '')
question26 = Question.create!(author_id: user14.id, topic_id: photography.id, body: 'DSLR Cameras: Which is better for a beginner - Nikon or Canon? Which model?')
UserLikedQuestion.create!(user_id: user4.id, question_id: question26.id)
UserLikedQuestion.create!(user_id: user12.id, question_id: question26.id)
answer81 = Answer.create!(question_id: question26.id, author_id: user4.id, body: 'My standard answer to this question is: what do your friends and family have that you can get borrowed? If Nikon, get Nikon, if Canon, get Canon, if another brand, get that brand. As with the particular model, it really doesn’t matter a lot, as all entry level models will give you more than enough and you probably would update your gear in a few years. Establish your budget, go to a local store and play with some models to see how they feel on your hands. Don’t worry a lot about brands or technical specifications, just take the one you liked more and enjoy it.')
UserLikedAnswer.create!(user_id: user1.id, answer_id: answer81.id)
UserLikedAnswer.create!(user_id: user3.id, answer_id: answer81.id)
UserLikedAnswer.create!(user_id: user2.id, answer_id: answer81.id)
answer82 = Answer.create!(question_id: question26.id, author_id: user5.id, body: 'Definitely Canon. Just kidding. Do you have any friends that own either camera brand? Would you be able to borrow/try each other’s lenses? Which camera feels more comfortable in your hands? Get something nice that fits your budget. I shoot Nikon, but all my friends shoot Canon.')
UserLikedAnswer.create!(user_id: user25.id, answer_id: answer82.id)
UserLikedAnswer.create!(user_id: user22.id, answer_id: answer82.id)
answer83 = Answer.create!(question_id: question26.id, author_id: user17.id, body: 'It doesn’t matter. Canon is slightly cheaper, Nikon bodies have better functionality for the price, but lenses are more expensive. Canon’s menu system is a bit more intuitive, while Nikon’s built-in tips are more graphic and helpful. If you want to get the most for your money, consider Pentax K-70, although there you’ll get into a trap of relatively exotic system, which lenses and accessories are harder to obtain.')
UserLikedAnswer.create!(user_id: user23.id, answer_id: answer83.id)
UserLikedAnswer.create!(user_id: user5.id, answer_id: answer83.id)
UserLikedAnswer.create!(user_id: user22.id, answer_id: answer83.id)
answer84 = Answer.create!(question_id: question26.id, author_id: user17.id, body: 'Get any basic DSLR and start shooting, but shoot responsibly (nikon d3200 or canon 1200d). Hardly matters for beginners. Be it canon or nikon one hardly utilizes the 100% potential of the camera. Beginner cameras are designed for detailed understanding of basics photography rather than switching to auto mode and firing numerous shots. For Professionals it depends on the specific job oriented features which they are certain about always. Ultra professionals use Hasselblad or Phase One cameras. [its hard to think we live in the world where photographs can be deleted and again clicked and memory cards cost half the price it used to take 36 films printed, the difference being people used cameras as a tool to learn photography then, but now its just a photo clicking gadget]')
answer85 = Answer.create!(question_id: question26.id, author_id: user17.id, body: 'There are so many variables it’s almost impossible to answer. Which are you leaning toward? Do you want interchangeable lenses or a bridge camera, stunning video or stunning stills? Are you looking to become a professional or just want to take some “better than cell phone” pictures? Determine where you’re heading with your photography, do some research and talk to people who have cameras. It will all fall into place.')
UserLikedAnswer.create!(user_id: user13.id, answer_id: answer85.id)
UserLikedAnswer.create!(user_id: user15.id, answer_id: answer85.id)
UserLikedAnswer.create!(user_id: user12.id, answer_id: answer85.id)
UserLikedAnswer.create!(user_id: user23.id, answer_id: answer85.id)
UserLikedAnswer.create!(user_id: user25.id, answer_id: answer85.id)
UserLikedAnswer.create!(user_id: user22.id, answer_id: answer85.id)



question27 = Question.create!(author_id: user16.id, topic_id: photography.id, body: 'Why do some museums permit taking photos while others don\'t?')
UserLikedQuestion.create!(user_id: user8.id, question_id: question27.id)
UserLikedQuestion.create!(user_id: user12.id, question_id: question27.id)
UserLikedQuestion.create!(user_id: user13.id, question_id: question27.id)
UserLikedQuestion.create!(user_id: user7.id, question_id: question27.id)
answer86 = Answer.create!(question_id: question27.id, author_id: user11.id, body: 'First, there’s the safety of the artifacts. You may not think of light as dangerous, but to an artifact or a piece of art it can be. One thing that conservators monitor is light levels. Exposing delicate pigments, fabrics, and other materials to extremely bright light can fade them. Keeping galleries with delicate objects in them at a particular light level is important. With other items (for example, the cars and trains and industrial machinery at the Henry Ford in Dearborn, Michigan) the light from a flash is probably not going to cause significant damage. Second, in some cases, there’s a question of copyright. Again, not something that most people think of, but the right to reproduce images is part of copyright law. Especially with works of art, museums own the right to reproduce images of some of them, and they don’t want people taking unauthorized reproductions.')
UserLikedAnswer.create!(user_id: user12.id, answer_id: answer86.id)
UserLikedAnswer.create!(user_id: user13.id, answer_id: answer86.id)
UserLikedAnswer.create!(user_id: user15.id, answer_id: answer86.id)
UserLikedAnswer.create!(user_id: user2.id, answer_id: answer86.id)
answer87 = Answer.create!(question_id: question27.id, author_id: user12.id, body: 'That depends more on local copyright laws, traditions and museum\'s reliance on merchandise, rather than anything else. Most museums in Europe, Russia, Ukraine and China allow photography for free or for a separate fee, without flash and tripod. Constant flow of flashes really harms many exhibits, tripod in clumsy hands may lead to a disaster (or visitor traffic congestion, same goes for monopods and selfie sticks), and also in skilled hands good camera with a good tripod is quite capable to produce sellable results with profits not making it to museum budget. I know three popular museums that prohibit photography at all and with anything, and closely watch everyone who tries to violate that: Museo del Prado in Madrid (otherwise they would be much less successful with merchandise), Berleybey palace in Istanbul and Private Collections Department of Moscow State Fine Arts museum (core collection photography is allowed). Although, with valid journalist credentials and cause, and by prior arrangement, you can be allowed with any camera to any museum.')
UserLikedAnswer.create!(user_id: user12.id, answer_id: answer87.id)
UserLikedAnswer.create!(user_id: user13.id, answer_id: answer87.id)
UserLikedAnswer.create!(user_id: user15.id, answer_id: answer87.id)
UserLikedAnswer.create!(user_id: user2.id, answer_id: answer87.id)
UserLikedAnswer.create!(user_id: user14.id, answer_id: answer87.id)
UserLikedAnswer.create!(user_id: user17.id, answer_id: answer87.id)
UserLikedAnswer.create!(user_id: user18.id, answer_id: answer87.id)
UserLikedAnswer.create!(user_id: user20.id, answer_id: answer87.id)
answer88 = Answer.create!(question_id: question27.id, author_id: user13.id, body: 'From what I understand, what’s harmful is the flash. I’ve noticed that French museums I visited didn’t allow photography at all, whereas other museums I visited like MoMA and the Rijksmuseum allowed photography as long as there was no flash. If reproductions weren’t a concern, I suppose banning photography would eliminate the unfortunate visitors who didn’t realize their flashes were on, and heighten the museum experience itself since you don’t have to stand on your toes peering across hordes of visitors just standing there, photographing, and then going away again.')
UserLikedAnswer.create!(user_id: user12.id, answer_id: answer88.id)
UserLikedAnswer.create!(user_id: user13.id, answer_id: answer88.id)
UserLikedAnswer.create!(user_id: user2.id, answer_id: answer88.id)
answer89 = Answer.create!(question_id: question27.id, author_id: user14.id, body: 'This depends what their exhibits are. Photographs are generally prohibited anywhere where there are precious paintings, textiles or other materials that could be bleached by camera flashes. Generally museums displaying sculptures or other materials that cannot be damaged by camera flashes, allow photography. This annoys me somewhat, museums make excellent places take interesting pictures and I am quite capable of not using flash. However museums (understandably) ban all photography to account for the irresponsible morons.')
UserLikedAnswer.create!(user_id: user12.id, answer_id: answer89.id)
UserLikedAnswer.create!(user_id: user13.id, answer_id: answer89.id)


question28 = Question.create!(author_id: user10.id, topic_id: photography.id, body: 'What should you do if your flash memory card gets wet going through the washer such as how long you should wait for it to dry and how likely all the data is still there?')
UserLikedQuestion.create!(user_id: user8.id, question_id: question28.id)
UserLikedQuestion.create!(user_id: user18.id, question_id: question28.id)
UserLikedQuestion.create!(user_id: user12.id, question_id: question28.id)
UserLikedQuestion.create!(user_id: user2.id, question_id: question28.id)
UserLikedQuestion.create!(user_id: user9.id, question_id: question28.id)
UserLikedQuestion.create!(user_id: user15.id, question_id: question28.id)
answer90 = Answer.create!(question_id: question28.id, author_id: user11.id, body: 'Flash memory is a pretty stable medium so there is a pretty good chance you are OK. You can stick the card in a cup or bowl of dry uncooked rice overnight which that will help draw water out of the card.')
UserLikedAnswer.create!(user_id: user12.id, answer_id: answer90.id)
UserLikedAnswer.create!(user_id: user13.id, answer_id: answer90.id)
answer91 = Answer.create!(question_id: question28.id, author_id: user12.id, body: 'I got a couple of CF memory cards wet when I took an unplanned swim. I dried them out, and they worked just fine. SD cards should survive even better. Frank Myers is right about using rice to help dry it out. Wrap it in a couple of layers of tissue, first however. This will keep the starchy dust off of the card.')
UserLikedAnswer.create!(user_id: user22.id, answer_id: answer91.id)
UserLikedAnswer.create!(user_id: user13.id, answer_id: answer91.id)
answer92 = Answer.create!(question_id: question28.id, author_id: user19.id, body: 'My wife has laundered a couple of my thumb drives with no adverse effects on the drives or data. Just wait until they are thoroughly dry.')
answer93 = Answer.create!(question_id: question28.id, author_id: user21.id, body: 'I heard putting it in a jar of rice is good for jumping moisture. Try that.')



# design
# answer50 = Answer.create!(question_id: question18.id, author_id: user11.id, body: '')
# comment1 = Comment.create!(answer_id: answer49.id, author_id: user11.id, body: '')
question29 = Question.create!(author_id: user6.id, topic_id: design.id, body: 'What is the most efficient building design?')
UserLikedQuestion.create!(user_id: user8.id, question_id: question29.id)
UserLikedQuestion.create!(user_id: user12.id, question_id: question29.id)
UserLikedQuestion.create!(user_id: user13.id, question_id: question29.id)
UserLikedQuestion.create!(user_id: user7.id, question_id: question29.id)
answer94 = Answer.create!(question_id: question29.id, author_id: user14.id, body: 'The most efficient shape is almost always going to be a square or rectangle. Spheres are more expensive to build (we tell our clients to anticipate 15% higher building costs, minimum) because the materials that we are using to build with are square or rectangular… even the forms used to make curved concrete surfaces start with square sheets of metal which must be worked, adding labor cost. Whether the building is more square and tall or rectangular and flat also impacts efficiency... especially thermal efficiency (and thus monthly utility cost), as long and flat is “naturally” better in warm, arid climates and square and tall is better in cold, humid environments.')
UserLikedAnswer.create!(user_id: user8.id, answer_id: answer94.id)
UserLikedAnswer.create!(user_id: user15.id, answer_id: answer94.id)
UserLikedAnswer.create!(user_id: user16.id, answer_id: answer94.id)
UserLikedAnswer.create!(user_id: user17.id, answer_id: answer94.id)
UserLikedAnswer.create!(user_id: user19.id, answer_id: answer94.id)
answer95 = Answer.create!(question_id: question29.id, author_id: user19.id, body: 'When a design is commissioned goals are spelled out. Efficiency is rarely the primary purpose. To impress, to inspire, to protect, to comfort... These are all possible goals that might be spelled out. Efficiency alone does not apeal to the human experience. We are social creatures lead by interaction and community. Efficiency does not encourage communal interaction or shared experience.')
UserLikedAnswer.create!(user_id: user18.id, answer_id: answer95.id)
UserLikedAnswer.create!(user_id: user4.id, answer_id: answer95.id)
UserLikedAnswer.create!(user_id: user6.id, answer_id: answer95.id)
UserLikedAnswer.create!(user_id: user7.id, answer_id: answer95.id)
UserLikedAnswer.create!(user_id: user9.id, answer_id: answer95.id)
answer96 = Answer.create!(question_id: question29.id, author_id: user7.id, body: 'I prefer square/rectangle, but both, square or cylinder have its inconveniences. Square is perfect for construction but  it remains residual spaces in the corners. Cylinder maximize better the volume but its construction is more difficult and less practical and cheap for furniture. Besides, usually plots in our cities are mainly square/rectangles, so, supposedly, that figure make better use of space. And think that users want all their whole área, even corners, tough never use it.')
UserLikedAnswer.create!(user_id: user18.id, answer_id: answer96.id)
UserLikedAnswer.create!(user_id: user20.id, answer_id: answer96.id)
answer97 = Answer.create!(question_id: question29.id, author_id: user22.id, body: 'If you are talking about minimizing the facade area geometrically speaking, while having the same square foot of rentable space, you must do it in a circular shape. Note that facade cost is a considerable portion of the cost in buildings. But your question goes a long way beyond that. Efficient in terms of what? Efficient for energy savings? Then there are systems such as LEED certified buildings which are governed by USGBC guidelines, and if you build a LEED certified building, it will bring you some benefits along the way although in the beginning it will be slightly costlier to build.')
UserLikedAnswer.create!(user_id: user2.id, answer_id: answer97.id)
answer98 = Answer.create!(question_id: question29.id, author_id: user21.id, body: 'It rather depends on what your criteria for efficiency is. If efficient use of available land is important (as it usually is in, say England, The Netherlands or Japan, or in urban areas across the world), clearly a building with a smaller footprint/volume is more efficient. This then has the knock on effect of creating higher density, which permits much more efficient provision of services.')

question30 = Question.create!(author_id: user24.id, topic_id: design.id, body: 'How does web design help improve your business?')
UserLikedQuestion.create!(user_id: user4.id, question_id: question30.id)
UserLikedQuestion.create!(user_id: user5.id, question_id: question30.id)
UserLikedQuestion.create!(user_id: user7.id, question_id: question30.id)
answer99 = Answer.create!(question_id: question30.id, author_id: user21.id, body: 'Web designing can be one of the important step for in growing your business online. There are many options that web design provides to there business expansion idea. Now a days, the best way to grow your business is to publish your business online so that maximum people can connect to your business. For this web designing Singapore is one of the best option that will help you in publishing your business online and get the maximum number of views and followers and customers that are willing to buy the product for you.')
answer100 = Answer.create!(question_id: question30.id, author_id: user4.id, body: 'Use your website to tell people who you are, and what you do. People form their own conclusions about you, so why not give them some solid information to base this conclusion on. Whether you sell a product or a service, no one is going to pay you money without first seeing what you are capable of. The old saying, “a picture is worth a thousand words” never fit better. Having an attractive website helps to convey to customers that you are a professional business.')

question31 = Question.create!(author_id: user13.id, topic_id: design.id, body: 'Should I protect my web designs? How can I be sure that they won\'t be stolen by other web designers?')
UserLikedQuestion.create!(user_id: user15.id, question_id: question31.id)
UserLikedQuestion.create!(user_id: user17.id, question_id: question31.id)
answer101 = Answer.create!(question_id: question31.id, author_id: user14.id, body: 'There really is no such thing as a new design, I wouldn’t waste my time trying to protect anything. I would spend more time trying to create than protect. As you spend time stretching yourself, and your abilities, that’s where you’ll find fulfillment. People will begin searching you out because you are leaving what you have built on the table for others to copy, while blazing a path with new and fresh work to be emulated.')
UserLikedAnswer.create!(user_id: user20.id, answer_id: answer101.id)
UserLikedAnswer.create!(user_id: user2.id, answer_id: answer101.id)
answer102 = Answer.create!(question_id: question31.id, author_id: user7.id, body: 'No, you should not protect your designs. A design is useless without a client to pay for it. And clients do not pay for designs, they pay for websites. What low-rent wannabe freelancers do when they need free design ideas is do is they go to other bigger websites and copy the ideas. They don’t bother with the rest of it. They’re just like, ok, they put the menu over here and the buttons down here and rounded this and this type of color scheme. Then they go and re-implement your design scheme in their chosen platform. The reason they do this is that it’s completely impractical to try to copy actual code. They may rip small snippets off your CSS but that’s about it. Nothing you do to protect your IP could ever protect you from this.')
UserLikedAnswer.create!(user_id: user25.id, answer_id: answer102.id)
answer103 = Answer.create!(question_id: question31.id, author_id: user24.id, body: 'I don’t think in this digital world there really is much protecting of anything, especially of this nature. However, what you CAN do is actively seek out solutions that are incredibly useful and pretty, and that no one has quite done in that way before. Something that people WANT to copy. Do that on a consistent basis, and I believe you will be quite happy with the work that comes from your labors.')
UserLikedAnswer.create!(user_id: user22.id, answer_id: answer103.id)
UserLikedAnswer.create!(user_id: user8.id, answer_id: answer103.id)
UserLikedAnswer.create!(user_id: user9.id, answer_id: answer103.id)


# technology
# answer50 = Answer.create!(question_id: question18.id, author_id: user11.id, body: '')
# comment1 = Comment.create!(answer_id: answer49.id, author_id: user11.id, body: '')
question20 = Question.create!(author_id: user17.id, topic_id: technology.id, body: 'What are some interesting facts which are not commonly known?')
answer51 = Answer.create!(question_id: question20.id, author_id: user13.id, body: 'Bill Gates got his degree 32 years after dropping out from Harvard University. He had promised his dad that he would get his degree and fulfilled that promise.')
answer52 = Answer.create!(question_id: question20.id, author_id: user18.id, body: 'Facebook\'s campus in Palo Alto was previously owned by Sun Microsystems. After it got acquired by Oracle, FB moved in but Zuckerburg didn\'t remove the sign and just flipped it over.')
answer53 = Answer.create!(question_id: question20.id, author_id: user4.id, body: 'Matt le Blanc who played Joey in the evergreen TV show \'F.R.I.E.N.D.S\' was down to his last 11 dollars on the day when he landed the role. He would have left New York had he become broke.')
answer54 = Answer.create!(question_id: question20.id, author_id: user23.id, body: 'The island nation Tuvalu generates revenue from the use of its area code for premium rate telephone numbers and from the commercialization of its ".tv" Internet domain name. The ".tv" domain name generates around $2.2 million each year from royalties, which is about ten per cent of the government\'s total revenue.')
answer55 = Answer.create!(question_id: question20.id, author_id: user24.id, body: 'The Romans are alleged by some to have had a toilet god in the form of Crepitus, who was also the god of flatulence and was invoked if a person had diarrhoea or constipation. They additionally propitiated Stercutius (named from stercus or excrement), the god of dung, who was particularly important to farmers when fertilising their fields with manure.')
answer56 = Answer.create!(question_id: question20.id, author_id: user6.id, body: 'Johnny Depp collects Barbies. A source close to the actor says that he has dozens and dozens of Barbies, all of them are limited and special editions. Not only does the collection include his own dolls from his movies but Beyonce, the cast of "High School Musical," Elvis, Paris Hilton, Marilyn Monroe, and Audrey Hepburn, but the strangest one is of Lindsay Lohan complete with ankle monitor bracelet from her time on house arrest.
Depp says that he plays Barbies a lot with his kids, and claims it\'s one of the things he\'s good at. The source also claims that Johnny will dress and accessorize his collection according to what is going on in show business news.')

question32 = Question.create!(author_id: user14.id, topic_id: technology.id, body: 'How do you keep yourself updated with technology?')
UserLikedQuestion.create!(user_id: user4.id, question_id: question32.id)
UserLikedQuestion.create!(user_id: user5.id, question_id: question32.id)
UserLikedQuestion.create!(user_id: user6.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user1.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user2.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user3.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user4.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user5.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user6.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user7.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user8.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user9.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user10.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user11.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user13.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user12.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user15.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user16.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user17.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user18.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user19.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user20.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user21.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user22.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user23.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user24.id, question_id: question32.id)
UserWatchedQuestion.create!(user_id: user25.id, question_id: question32.id)
answer104 = Answer.create!(question_id: question32.id, author_id: user24.id, body: 'Install \'flipboard\' on your iphone,ipad and/or android. Add the topic \'technology\' to your page. Voila. Flipboard does a great job of assimilating content from various tech sites and always keeps you up to date. The easy-to-skim and convenient layout and design of the app itself are just bonuses. I usually plan to spend 5 minutes in the morning reading but I end up using an hour on some days.')
UserLikedAnswer.create!(user_id: user6.id, answer_id: answer104.id)
UserLikedAnswer.create!(user_id: user5.id, answer_id: answer104.id)
UserLikedAnswer.create!(user_id: user7.id, answer_id: answer104.id)
UserLikedAnswer.create!(user_id: user9.id, answer_id: answer104.id)
UserLikedAnswer.create!(user_id: user15.id, answer_id: answer104.id)
UserLikedAnswer.create!(user_id: user18.id, answer_id: answer104.id)
answer105 = Answer.create!(question_id: question32.id, author_id: user22.id, body: 'This is one of my favourite questions during an interview and it always amazes me how many of them to whom I ask this start fumbling or talk about some half a decade old technology. Unlike other careers where the basic concept and knowledge of history matters a lot in IT it is the other way around. It would not be incorrect to say that in most other careers knowledge required for being an expert is like a queue (First in First out) but as far as Information Technology is concerned its a stack (Last in First out) aka The latest knowledge is the most relevant one. This makes the not so easy life of anyone in this career even tougher. It requires you to be updated with the latest technological trends. Technology careers can be related to Fashion Industry where it get outdated every few weeks.')
UserLikedAnswer.create!(user_id: user19.id, answer_id: answer105.id)
UserLikedAnswer.create!(user_id: user5.id, answer_id: answer105.id)
UserLikedAnswer.create!(user_id: user3.id, answer_id: answer105.id)
answer106 = Answer.create!(question_id: question32.id, author_id: user12.id, body: 'I don’t. I just listen to other people’s conversations; I eavesdrop conversations. If they happen to be talking about technology, I will be listening but I’ll pretend to do something else while eavesdropping. Other than that, I don’t update myself on technology. New technology develops really fast and there is really no reason to keep up to it unless it has some importance to it; like new devices to locate buses, subways, etc.')
UserLikedAnswer.create!(user_id: user9.id, answer_id: answer106.id)






UserLikedQuestion.create!(user_id: user8.id, question_id: question18.id)
UserLikedQuestion.create!(user_id: user18.id, question_id: question18.id)
UserLikedQuestion.create!(user_id: user12.id, question_id: question18.id)
UserLikedQuestion.create!(user_id: user2.id, question_id: question18.id)
UserLikedQuestion.create!(user_id: user9.id, question_id: question18.id)
UserLikedQuestion.create!(user_id: user15.id, question_id: question18.id)

UserLikedAnswer.create!(user_id: user8.id, answer_id: answer49.id)
UserLikedAnswer.create!(user_id: user14.id, answer_id: answer49.id)
UserLikedAnswer.create!(user_id: user16.id, answer_id: answer49.id)
UserLikedAnswer.create!(user_id: user17.id, answer_id: answer49.id)
UserLikedAnswer.create!(user_id: user19.id, answer_id: answer49.id)
UserLikedAnswer.create!(user_id: user8.id, answer_id: answer53.id)
UserLikedAnswer.create!(user_id: user6.id, answer_id: answer53.id)
UserLikedAnswer.create!(user_id: user5.id, answer_id: answer53.id)
UserLikedAnswer.create!(user_id: user8.id, answer_id: answer56.id)
UserLikedAnswer.create!(user_id: user1.id, answer_id: answer56.id)
UserLikedAnswer.create!(user_id: user2.id, answer_id: answer56.id)
UserLikedAnswer.create!(user_id: user3.id, answer_id: answer56.id)
UserLikedAnswer.create!(user_id: user4.id, answer_id: answer56.id)

UserLikedComment.create!(user_id: user8.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user1.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user2.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user3.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user4.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user5.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user6.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user7.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user9.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user11.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user12.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user14.id, comment_id: comment2.id)
UserLikedComment.create!(user_id: user15.id, comment_id: comment2.id)


Follow.create!(followee_id: user10.id, follower_id: user8.id)
Follow.create!(followee_id: user12.id, follower_id: user8.id)
Follow.create!(followee_id: user1.id, follower_id: user8.id)
Follow.create!(followee_id: user14.id, follower_id: user8.id)
Follow.create!(followee_id: user18.id, follower_id: user8.id)
Follow.create!(followee_id: user19.id, follower_id: user8.id)
Follow.create!(followee_id: user21.id, follower_id: user8.id)
Follow.create!(followee_id: user3.id, follower_id: user8.id)
Follow.create!(followee_id: user4.id, follower_id: user8.id)
Follow.create!(followee_id: user6.id, follower_id: user8.id)
Follow.create!(followee_id: user2.id, follower_id: user8.id)
Follow.create!(followee_id: user9.id, follower_id: user8.id)
Follow.create!(followee_id: user22.id, follower_id: user8.id)
Follow.create!(followee_id: user25.id, follower_id: user8.id)
Follow.create!(followee_id: user15.id, follower_id: user8.id)


UserWatchedQuestion.create!(user_id: user8.id, question_id: question18.id)
