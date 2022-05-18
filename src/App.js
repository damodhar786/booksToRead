import React, { useState } from "react";
import "./styles.css";

var booksDictionary = {
  army: [
    {
      book:
        "Shoot. Dive. Fly - Stories of Grit and Adventure from the Indian Army",
      author: "Rachna Bisht Rawat",
      about:
        "Learn all about an exceptional way of life. The book aims to introduce teenagers to the armed forces, unveiling both the perils-the rigours and the challenges-and the perks-the thrill and the adventure-of a career in uniform. Ballroom dancing, flying fighter planes, detonating bombs, skinning and eating snakes in times of dire need and everything else in between-there’s nothing our officers can’t do! Read twenty-one nail-biting stories of daring. Hear from some amazing men and women about what the forces have taught them-and decide if the olive-green uniform is what you want to wear too."
    },
    {
      book: "Baaz",
      author: "Anuja Chauhan",
      about:
        "‘Why do they call you Baaz?’ ‘It means falcon,’ he replies solemnly. ‘Or bird of prey. Because I swoop down on the enemy planes just like a Baaz would.’ Then he grins. The grey eyes sparkle. ‘It’s also short for bastard.’1971. The USSR-backed India-Mukti Bahini alliance is on the brink of war against the America-aided Pakistani forces. As the Cold War threatens to turn red hot, handsome, laughing Ishaan Faujdaar, a farm boy from Chakkahera, Haryana, is elated to be in the IAF, flying the Gnat, a tiny fighter plane nicknamed ‘Sabre Slayer’ for the devastation it has wreaked in the ranks of Pakistan’s F-86 Sabre Squadrons. Flanked by his buddies Raks, a MiG-21 Fighter, Maddy, a transport pilot who flies a Caribou, and fellow Gnatties Jana, Gana and Mana, Shaanu has nothing on his mind but glory and adventure – until he encounters Tehmina Dadyseth, famed bathing beauty and sister of a dead fauji, who makes him question the very concept of nationalism and whose eyes fill with disillusioned scorn whenever people wax eloquent about patriotism and war…Pulsating with love, laughter and courage, Baaz is Anuja Chauhan’s tribute to our men in uniform."
    },
    {
      book:
        "Can I have a Chocolate Milkshake? An Awe-Inspiring True Story of an Army Officer",
      author: "Rajat Mishra",
      about:
        "How would you feel if, one day, you wake up in a hospital to the faces of doctors and nurses? How would you react when you see your dreams shattering right in front of your eyes? And what would go through your mind when you’re barred from pursuing your passion? Crushed and devastated from within? Meet Lt. Siddhant, an epitome of courage and spirit, who woke up to all this one morning and yet remained composed, when told that his right arm has been amputated post a fateful accident. An average human would collapse, but Lt. Siddhant, an Indian Army officer asked, “Can I have a Chocolate Milkshake?” This is the true-story of Lt. Siddhant, who when asked to shed his Olive Greens thereafter, goes on to build a successful career in the corporate world and becomes an inspiration for many. But, how did he get there? How did he win his battle? 'Can I have a Chocolate Milkshake?' is a riveting tale of a man overcoming his limitations, fighting against all odds, and emerging as a winner."
    }
  ],
  autobiography: [
    {
      book: "Wings of Fire: An Autobiography",
      author: "Abdul Kalam with Arun Tiwari",
      about:
        "Avul Pakir Jainulabdeen Abdul Kalam, the son of a little-educated boat-owner in Rameswaram,Tamil Nadu, had an unparalleled career as a defence scientist, culminating in the highest civilian award of India, the Bharat Ratna. As chief of the country’s defence research and development programme, Kalam demonstrated the great potential for dynamism and innovation that existed in seemingly moribund research establishments.This is the story of Kalam’s rise from obscurity and his personal and professional struggles, as well as the story of Agni, Prithvi, Akash, Trishul and Nag—missiles that have become household names in India and that have raised the nation to the level of a missile power of international reckoning. This is also the saga of independent India’s struggle for technological self-sufficiency and defensive autonomy—a story as much about politics, domestic and international, as it is about science."
    },
    {
      book: "Sachin Tendulkar - PLAYING IT MY WAY",
      author: "Sachin Tendulkar",
      about:
        " ‘I don’t think anyone, apart from Don Bradman, is in the same class as Sachin Tendulkar.’ –Shane Warne. This is cricket icon, Sachin Tendulkar’s life story in his own words – his journey from a small boy with dreams to becoming a cricket god. His amazing story has now been turned into a major film, A Billion Dreams, in which he stars. The greatest run-scorer in the history of cricket, Sachin Tendulkar retired in 2013 after an astonishing 24 years at the top. The most celebrated Indian cricketer of all time, he received the Bharat Ratna Award – India’s highest civilian honour – on the day of his retirement. Now Sachin Tendulkar tells his own remarkable story – from his first Test cap at the age of 16 to his 100th international century and the emotional final farewell that brought his country to a standstill. When a boisterous Mumbai youngster’s excess energies were channelled into cricket, the result was record-breaking schoolboy batting exploits that launched the career of a cricketing phenomenon. Before long Sachin Tendulkar was the cornerstone of India’s batting line-up, his every move watched by a cricket-mad nation’s devoted followers. Never has a cricketer been burdened with so many expectations; never has a cricketer performed at such a high level for so long and with such style – scoring more runs and making more centuries than any other player, in both Tests and one-day games. And perhaps only one cricketer could have brought together a shocked nation by defiantly scoring a Test century shortly after terrorist attacks rocked Mumbai. His many achievements with India include winning the World Cup and topping the world Test rankings. Yet he has also known his fair share of frustration and failure – from injuries and early World Cup exits to stinging criticism from the press, especially during his unhappy tenure as captain. Despite his celebrity status, Sachin Tendulkar has always remained a very private man, devoted to his family and his country. Now, for the first time, he provides a fascinating insight into his personal life and gives a frank and revealing account of a sporting life like no other."
    },
    {
      book: "Maverick Messiah - A Political Biography of N.T. Rama Rao",
      author: "Ramesh Kandula",
      about:
        "Nandamuri Taraka Rama Rao, widely known as NTR, was not merely a film star who strayed into politics and captured power in Andhra Pradesh. The actor-politician redefined the political culture in the state and scripted a new political idiom. His rather dramatic entry into politics, the profound impact he left on the people of Andhra Pradesh and the vital role he played in national politics during his relatively short political life, however, have not received deserving recognition.Maverick Messiah captures the different facets of NTR’s life in all their varied hues and puts in perspective the significant contribution of the actor-politician to the Indian political tapestry."
    }
  ],
  politics: [
    {
      book:
        "The Accidental Prime Minister - The Making And Unmaking Of Manmohan Singh | Book on Indian political life",
      author: "Sanjaya Baru",
      about:
        "When The Accidental Prime Minister was published in 2014, it created a storm and became the publishing sensation of the year. The Prime Minister’s Office called the book a work of ‘fiction’, the press hailed it as a revelatory account of Prime Minister Manmohan Singh’s first term in the UPA. Written by Singh’s media adviser and trusted aide, the book describes Singh’s often troubled relations with his ministers, his cautious equation with Sonia Gandhi and how he handled the big crises from managing the Left to pushing through the nuclear deal. Insightful, acute and packed with political anecdotes, The Accidental Prime Minister is one of the great insider accounts of Indian political life."
    },
    {
      book: "Makers Of Modern India",
      author: "Ramachandra Guha",
      about:
        "Ramachandra Guha, author of the internationally acclaimed India After Gandhi, profiles nineteen Indians whose ideas had a defining impact on the formation and evolution of our republic and presents rare and compelling excerpts from their writings and speeches. These men and women were not only influential political activists-they also wrote with eloquence, authority and deliberation as they reflected on what Guha describes in his illuminating prologue as ‘the most contentious times in the most interesting country in the world’. Their writings take us from the subcontinent’s first engagement with modernity in the nineteenth century, through the successive phases of the freedom movement, on through the decades after Independence. This book highlights little-known aspects of major figures in Indian history like Tagore and Nehru; it also rehabilitates thinkers who have been unjustly forgotten, such as Tarabai Shinde and Hamid Dalwai. These makers of modern India did not speak in one voice: their perspectives are sometimes complementary, at other times contradictory. The topics they explore and analyse include religion, caste, gender, language, nationalism, colonialism, democracy, secularism and the economy-that is to say, all that is significant in the human condition. These issues have a resonance in our own times, not just in India but everywhere in the world as well."
    },
    {
      book: "Walking with the Comrades",
      author: "Arundhati Roy",
      about:
        "‘The terse, typewritten note slipped under my door in a sealed envelope confirmed my appointment with “India’s single biggest internal security challenge”. I’d been waiting for months to hear from them…’ In early 2010, Arundhati Roy travelled into the forests of Central India, homeland to millions of indigenous people, dreamland to some of the world’s biggest mining corporations. The result is this powerful and unprecedented report from the heart of an unfolding revolution."
    }
  ],
  fiction: [
    {
      book: "Sherlock Holmes",
      author: "Sir Arthur Conan Doyle",
      about:
        "Meet Sherlock Holmes-eccentric genius and brilliant detective. Using the science of deduction, Holmes cracks cases that baffle even the police. When the famous sleuth moves into rooms at 221B Baker Street in London with Dr John Watson, a medic returned from the war front, the two begin a warm and enduring friendship-and a series of exciting adventures. This volume contains the four novels featuring the world’s most famous detective. Narrated by Dr Watson, the adventures in this volume are packed with multi-layered mysteries-a grisly murder, a daring robbery, mysterious messages, strange sights and sounds, shadowy alliances, and secret societies-and are truly epic."
    },
    {
      book: "She Broke Up, I Didn’t",
      author: "Durjoy Datta",
      about:
        "‘I did not know what to say. Lie? Who would lie about such a thing? Was she testing me? Who would test anyone like that?’. Deb is absolutely crazily in love with the stunning Avantika. He can’t believe that she is his. Their relationship is going great except for the one time when Deb faltered by breaching her trust. After he apologized, Avantika grudgingly accepted him back. However, his insecurity about her seems to be pushing him into infidelity again. The trust that he had worked so hard to build is lost once again. Will Avantika take him back this time or will she move on? In She Broke Up, I Didn’t! . . . Durjoy Datta explores the themes of fidelity, love and lust through a roller coaster of misunderstandings and mistakes that are so common in relationships today."
    }
  ]
};

const genre = Object.keys(booksDictionary);

export default function App() {
  var [genreSelector, setGenreSelector] = useState("");

  var [books, setBooks] = useState([]);

  function genreClickHandler(genre) {
    setGenreSelector(genreSelector);
    setBooks(booksDictionary[genre.toLowerCase()]);
  }

  function genreChangeHandler(event) {
    // var userInput = event.target.value;
    // var genreSelector = booksDictionary[userInput];
    //setGenreSelector(genreSelector);
    setGenreSelector(event.target.value);
  }

  return (
    <div className="App">
      <h1>Books to Read</h1>
      <div>
        <input onChange={genreChangeHandler}></input>

        <button
          className="search"
          onClick={() => genreClickHandler(genreSelector)}
        >
          Search
        </button>
      </div>

      <h2 style={{ color: "black" }}>
        {" "}
        Choose Genre you are interested to read{" "}
      </h2>
      <div>
        {genre.map((genreSelector) => {
          return (
            <button
              className="genre"
              onClick={() => genreClickHandler(genreSelector)}
              key={genreSelector}
            >
              {genreSelector}
            </button>
          );
        })}
      </div>
      <div>
        {books ? (
          books.map((read, index) => {
            return (
              <div key={index} className="books">
                <h2>{read.book}</h2>
                <big>
                  <strong> Author : </strong>
                  <strong> {read.author}</strong>
                </big>
                <p>
                  <strong> About The Book : </strong>
                  <small>{read.about}</small>
                </p>
              </div>
            );
          })
        ) : (
          <h3>Your search does not have any results</h3>
        )}
      </div>
    </div>
  );
}
