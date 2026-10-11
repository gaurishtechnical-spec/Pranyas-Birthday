// ===== EDIT THIS FILE to personalise the site =====
const CONFIG = {
  friendName: "PRANYA",
  nickname:   "DHANIYA",          // shown on the red ribbon
  myName:     "GAURISH",
  birthday:   "15th OCT",
  passcode:   "1510",                // 4 digits (try their birthday as DDMM)
  music:      "audio/song.mp3",      // replace the file (keep the name) with your song
  birthdayText: "Happy birthday! Wishing you a little bit of happiness, love, laughter, and joy today and always.",
  // [PERSONAL BIRTHDAY MESSAGE] – one string per paragraph
  letterTitle: "To my little princess, Pranya 💗🎀",
  // Formatting: **bold**, *italic*. One string per paragraph.
  letter: [
    "Happy Birthday to my little sister, my tiny troublemaker, my forever baby, and one of the most precious people in my life. 🥹❤️",
    "Dear Pranya,",
    "I honestly don't even know where to start because there is so much I want to tell you. First of all, **HAPPY BIRTHDAY, MY LITTLE GIRL!** 🫶🏻💗 I hope you always keep that beautiful smile on your face because you have no idea how special you are to me.",
    "Sometimes I sit and think about all the memories we've made together, and it makes me realise how lucky I am to have you. All those silly little moments, the endless teasing, the random laughs over absolutely nothing, the secrets, the jokes only we understand, and all the times we annoyed each other for no reason. 😭💕 These might seem like ordinary things, but for me, they're some of the most beautiful memories of my life.",
    "And of course, how can I forget our fights? 😂 The arguments over the smallest things, the times we refused to talk to each other, the blaming, the complaining, and those moments when we acted like we hated each other. But the funniest part is that no matter how badly we fight, no matter how angry I get at you, at the end of the day, you're still my little sister, and my love for you never changes. I might scold you, tease you, annoy you, or act like you're the most irritating person ever, but trust me, **if anyone else dares to hurt you, they'll have to deal with me first.** 😤❤️ That's my job as your big brother, and I'm never giving it up.",
    "Now that I'm in college and we're separated by distance, I realise how much I miss the little things. I miss being around you, annoying you in person, fighting with you over stupid things, laughing with you, and just having you around. It's funny how the things that sometimes irritated me so much are now the things I wish I could experience a little more often. 🥹",
    "Growing up means things change. We get busy, we have our own responsibilities, and sometimes we can't be together whenever we want. But there's one thing I want you to remember forever, Pranya: **distance can separate us physically, but it can never separate our hearts.** No matter how far away I am, a part of me will always be right there with you. You will always have me, even on the days when we don't talk much, even when life gets busy, and even when we grow older and everything around us changes.",
    "I know I might not always express my feelings properly. Sometimes I may annoy you instead of comforting you, tease you instead of complimenting you, or scold you when all you need is someone to understand you. But beneath all of that, there's a big brother who loves you more than words can explain. A brother who will always worry about you, pray for your happiness, stand up for you, and want nothing but the absolute best for you.",
    "**I want you to know that you never have to face this world alone.** Whenever you're sad, come to me. Whenever you feel lost, talk to me. Whenever the world feels too difficult, remember that you have someone who will always listen to you, support you, and protect you in whatever way he can. You don't have to be strong all the time, and you don't have to pretend that everything is okay when it isn't. Your big brother is always here for you. Always. ❤️‍🩹🫂",
    "As you grow older, I hope life gives you a thousand reasons to smile. I hope you achieve every dream you have, meet people who genuinely love and respect you, and never settle for anything less than the happiness you deserve. I hope you become a confident, kind, independent, and beautiful person, not just on the outside but on the inside too. And even when you grow up, become super mature, and start acting like you don't need your big brother anymore, just remember that to me, you'll always be that little girl I'll want to protect from everything bad in this world. 🧿💗",
    "And listen, madam, no matter how old you get, you are NEVER escaping my teasing. 😂 You can grow taller, smarter, and more mature, but you'll forever be my little sister, my permanent headache, my partner in crime, and my favourite person to fight with. We still have so many memories to make, so many places to go, so many stupid arguments to have, and so many beautiful moments waiting for us.",
    "I wish I could be beside you today, give you the biggest hug, annoy you a little, and tell you all of this in person. But until I can do that, consider this letter one big virtual hug from your annoying big brother. 🫂💗",
    "Thank you for being my little sister. Thank you for all the laughter, the chaos, the fights, and the memories. Thank you for being a part of my life in a way nobody else ever could be.",
    "**Happy Birthday once again, my Pranya.** 🎂🎀❤️",
    "No matter where life takes us, no matter how many miles lie between us, and no matter how much we grow up, one thing will never change: I'll always be your big brother, you'll always be my little sister, and there will always be a special place in my heart that belongs only to you.",
    "I love you more than all our fights, more than all the distance between us, and more than these little words could ever explain.",
    "**Miles apart, but forever connected by heart.** ❤️‍🩹🫶🏻",
    "Keep smiling, keep shining, keep being your crazy little self, and never forget how deeply you're loved.",
    "**Forever your protective, annoying, slightly irritating, but endlessly loving big brother.** 🧿💗",
    "*Love you to the moon and back, my little princess. Happy Birthday, Pranya!* 🌙🎂💋"
  ],
  signoff: "",   // the letter already ends with its own sign-off
  // [OUR MEMORIES AND INSIDE JOKES] – tap a polaroid to read its note
  memories: [
    {img:"photos/memory-1.jpg", note:"BACHPAN KE PIZZA"},
    {img:"photos/memory-2.jpg", note:"STAICASE PHOTO SHOOT"},
    {img:"photos/memory-3.jpg", note:"OUR LITLE VERSIONS"},
    {img:"photos/memory-4.jpg", note:"WASTE OF WONDERs"},
    {img:"photos/memory-5.jpg", note:"SOME MORE PICS"}
  ],
  // Optional: your own character images (transparent PNG). Leave "" to use the built-in bear.
  mascot: {
    sign: "mascot/sign.png",   // e.g. "mascot/sign.png"    – holding the X sign (wrong passcode)
    stand: "mascot/stand.png",   // e.g. "mascot/stand.png"   – standing (question, birthday, letter, frame)
    mad: "mascot/mad.png",   // e.g. "mascot/mad.png"     – "How dare you!?"
    back: "mascot/back.png",   // e.g. "mascot/back.png"    – back turned ("Are you really excited?")
    balloon: "mascot/balloon.png"    // e.g. "mascot/balloon.png" – holding balloons (wish, final)
  },
  passcodePhoto: "photos/passcode.jpg",
  birthdayPhoto: "photos/birthday.jpg",
  frames:   ["photos/frame-1.jpg","photos/frame-2.jpg","photos/frame-3.jpg","photos/frame-4.jpg","photos/frame-5.jpg"],
  universe: ["photos/universe-1.jpg","photos/universe-2.jpg","photos/universe-3.jpg","photos/universe-4.jpg","photos/universe-5.jpg","photos/universe-6.jpg"],
  universeTitle: "Us in every universe",
  finalText: "May you achieve everything you've been waiting for!"
};
