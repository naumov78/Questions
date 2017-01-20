

User.delete_all
Topic.delete_all
Question.delete_all
Answer.delete_all
UserSubscribedTopic.delete_all


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





user1 = User.new(first_name: 'Padme', last_name: 'Amidala', email: 'padme_amidala@starwars.com', description: 'Teenage queen', password: '12345')
user1.userpic = File.open('https://s3.amazonaws.com/questions-pro/users/padme.jpg')
user1.save!
user2 = User.new(first_name: 'Jango', last_name: 'Fett', email: 'jango_fett@starwars.com', description: 'Bounty hunter', password: '12345')
user2.userpic = File.open('https://s3.amazonaws.com/questions-pro/users/jango.jpg')
user2.save!
user3 = User.new(first_name: 'Jabba', last_name: 'the Hutt', email: 'jabba_hutt@starwars.com', description: 'Crime boss', password: '12345')
user3.userpic = File.open('https://s3.amazonaws.com/questions-pro/users/jabba.jpg')
user3.save!
user4 = User.new(first_name: 'Qui-Gon', last_name: 'Jinn', email: 'quigon_jinn@starwars.com', description: 'Jedi Master', password: '12345')
user4.userpic = File.open('https://s3.amazonaws.com/questions-pro/users/quigon.png')
user4.save!
user5 = User.new(first_name: 'Obi-Wan', last_name: 'Kenobi', email: 'obiwan_kenobi@starwars.com', description: 'Wise and skilled Jedi Master', password: '12345')
user5.userpic = File.open('https://s3.amazonaws.com/questions-pro/users/obione.jpg')
user5.save!
user6 = User.new(first_name: 'Leia Amidala', last_name: 'Skywalker Organa Solo', email: 'leia@starwars.com', description: 'Luke Skywalker\'s sister and Han Solo\'s wife', password: '12345')
user6.userpic = File.open('https://s3.amazonaws.com/questions-pro/users/leia.jpg')
user6.save!
user7 = User.new(first_name: 'Anakin', last_name: 'Skywalker', email: 'anakin_skywalker@starwars.com', description: 'aka Darth Vader', password: '12345')
user7.userpic = File.open('https://s3.amazonaws.com/questions-pro/users/anakin.jpg')
user7.save!
user8 = User.new(first_name: 'Han', last_name: 'Solo', email: 'han_solo@starwars.com', description: 'Captain of the Millennium Falcon', password: '12345')
user8.userpic = File.open('https://s3.amazonaws.com/questions-pro/users/hansolo.png')
user8.save!


UserSubscribedTopic.create!(user_id: user8.id, topic_id: movies.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: books.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: music.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: business.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: cooking.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: sports.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: finance.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: food.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: education.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: children.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: photography.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: marketing.id)
UserSubscribedTopic.create!(user_id: user8.id, topic_id: culture.id)

question1 = Question.create!(author_id: user1.id, topic_id: movies.id, body: 'What is it like working with Christopher Nolan?')
answer1 = Answer.create!(question_id: question1.id, author_id: user2.id, body: 'I think one of the things that is really great about working with Chris is that he doesn’t, in any way, get in the way of my imagination. In fact, he works very hard at not having me confined by the mechanics of filmmaking. So, our process is usually starting long conversations just riffing on ideas. Then slowly I start writing and experimenting, coming up with sounds, etc., all the while keeping in constant conversation with Chris. In Interstellar, for instance, there’re so many themes, so many pieces, which always got to a certain point during the writing process but never had an ending, because Chris and I would get to a certain point with an idea and then abandon it because we got excited about the next idea. You have to think of how Chris and I work as a sort of breathless, constant sprint because we are just trying to keep up with our own ideas. The ideas are so plentiful when Chris and I get together, but the execution always takes more time and it can be so frustrating. It’s sometimes very frustrating for him as well because he’s trying to make a movie and he’s waiting on the music. When it comes to the music for Interstellar, I can honestly say that in one way or another, the music is our music, not just my music. It’s entirely our music, and that’s a testament to how much I let Chris into my world. The great thing is that as a composer, you can only write from the heart and from your innermost place. So, you have to trust your director. And that’s the thing - there’s a great sense of trust and a great sense of balance that Chris brings to the composing process. Because Chris cuts his movies in his garage, (giving his films a sort of a homemade quality), he never makes me feel that I have the enormous weight of the canvas on my shoulders. His editing process is really helpful for my composing process. The work and the story is always brought back to the personal and the intimate, and that’s perfect for how I work.')
question2 = Question.create!(author_id: user2.id, topic_id: movies.id, body: 'What would\'ve happened if the Abomination had joined the Avengers instead of the Hulk?')
answer2 = Answer.create!(question_id: question2.id, author_id: user1.id, body: 'They would probably have to convince him to be a “good guy”. He would be social awkward and be disruptive to the team building chemistry they have. Also, he would. Ot he utilized for most missions. Good point: what did General Ross (now Secretary Ross) do with the Abomination? Now that he has his yellow Hulk, he should be happy. Again, I find it hard to believe that a disgraced Ross who dedtory d half of Harlem, would be ascend to such a prominent position in Captain America Civil War. He was probably castes because they don\'t want to waste such a fine actor in William Hurt')
answer3 = Answer.create!(question_id: question2.id, author_id: user3.id, body: 'The Abomination would have to have a big change of heart and attitude. From what I recall, he was originally a spy for the Warsaw Pact and a ruthless individual. The Avengers have taken reformed criminals in the past but reformed is the key word here. The advantage of having the Abomination is that he maintains his intelligence so he’d be better than the low-intelligence version of the Hulk.')
answer4 = Answer.create!(question_id: question2.id, author_id: user4.id, body: 'The only difference between Abomination and the Hulk is the Abomination wants to kill. Bruce Banner is usually a pacifist (unless he gets too angry and loses control). Emil Blonsky is a rogue soldier. He would not hesitate to turn into the Abomination and would defiantly betray the rest of the Avengers if he got the chance.')
answer5 = Answer.create!(question_id: question2.id, author_id: user5.id, body: 'He’d waste no time backstabbing the lot of them, whilst The World Security Council gush about how much of a war hero he is.')
question3 = Question.create!(author_id: user1.id, topic_id: movies.id, body: 'What is wrong with Vito Corleone\'s jaws?')
answer6 = Answer.create!(question_id: question3.id, author_id: user8.id, body: 'Marlon Brando stuffed cotton wads into his cheeks slightly distending the walls of his mouth enabling him to assume the Don’s persona. There is nothing physically wrong with Brando’s mouth, you are just watching a consummate performance by a legendary actor. A small group of us went to see the Godfather during it’s opening week and we all were awed by the movie and it’s adherence to the book.')
answer7 = Answer.create!(question_id: question3.id, author_id: user7.id, body: 'The movie started from when Don Vito was an old and tired man. Look at him again…! It’s easy to assume that a character designer with some little knowledge about brain stroke guys would show Don Vito with paralyzed face muscles to induce viewers that he is very tired and old and as you said: “old, experienced ‘bulldog’, born on rural Sicily and after spending years of gang-related wars and stress, the solid ‘farm boy’”.')
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
ßanswer17 = Answer.create!(question_id: question7.id, author_id: user5.id, body: 'This answer may sound like an attempt at sarcasm, but I am very serious about this.  I would highly recommend “A Wrinkle in Time” by Madeleine L\'Engle.  Granted, the book is aimed toward an early teen audience, but I believe this book touches on so many relevant topics that it can promote some seriously critical thinking.')
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
