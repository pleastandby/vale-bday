import image1 from '../images/image 1.png'
import image2 from '../images/image 2.png'
import image3 from '../images/image 3.png'

export interface ScrapbookPhoto {
  id: string
  src: string
  alt: string
  caption: string
  tag: string
  date?: string
  rotation: number
}

export interface AppreciationCard {
  id: string
  category: string
  title: string
  frontIcon: string
  message: string
  highlight: string
}

export const birthdayData = {
  recipientName: "Valerie",
  nickname: "Vale",
  
  // Scene 01 — The Invitation
  invitation: {
    greeting: "Hey, Vale.",
    subtitle: "Someone left a little something for you... to celebrate our journey and the special connection we share.",
    buttonText: "Open your little surprise",
    hint: "From strangers to something truly special ✦",
  },

  // Scene 01.5 — The Bouquet Across The Distance
  flowers: {
    tag: "A Delivery Across The Distance",
    headline: "For You, Valerie",
    subheadline: "A bouquet hand-picked across every mile between us",
    noteHeader: "A Note Tucked Inside:",
    noteText:
      "I couldn't buy you flowers in real life because distance got in the way... but I wanted you to have ones that will never wilt, fade, or lose their beauty — just like the special connection we share.",
    noteSubtext:
      "No matter how far away you are, you deserve to feel celebrated today and every day. Happy birthday, Vale. 🌹",
    flowerHint: "Tap the roses to scatter petals into the air ✨",
    continueButton: "Step Into Your Universe ✦",
  },

  // Scene 02 — Birthday Introduction
  introduction: {
    overheadBadge: "A Little Universe Made Just for Vale",
    headline: "Today, the universe has one particular person to celebrate.",
    highlightedName: "VALERIE.",
    narrative:
      "We started out as strangers who could barely trust each other, and look at where destiny brought us. Some connections defy every odd, turning random moments into memories and cautious beginnings into an unbreakable bond.",
    scrollCue: "Scroll to explore our journey",
  },

  // Scene 03 — Digital Scrapbook
  scrapbook: {
    title: "The Digital Scrapbook",
    subtitle: "Captured fragments of warmth, laughter & our story",
    photos: [
      {
        id: "photo-1",
        src: image1,
        alt: "Vale candid portrait",
        caption: "That genuine smile that slowly broke down all the walls ✨",
        tag: "Memory 01",
        date: "The Turning Point",
        rotation: -2.5,
      },
      {
        id: "photo-2",
        src: image2,
        alt: "Vale smiling moment",
        caption: "Unfiltered joy and proof that destiny knew what it was doing 🌸",
        tag: "Memory 02",
        date: "Golden Moments",
        rotation: 2.2,
      },
      {
        id: "photo-3",
        src: image3,
        alt: "Vale memory celebration",
        caption: "What we have right now is a truly special connection 📸",
        tag: "Memory 03",
        date: "Always Cherished",
        rotation: -1.8,
      },
    ] as ScrapbookPhoto[],
  },

  // Scene 04 — A Few Things About You
  appreciation: {
    title: "A Few Things About You & Us",
    subtitle: "Click each card to uncover the little details and milestones that define our bond",
    cards: [
      {
        id: "destiny",
        category: "Destiny",
        title: "From strangers to this",
        frontIcon: "Sparkles",
        highlight: "We defied the odds",
        message:
          "I never thought we'd stay this long together, but let's say that it was destiny. We started out unsure and guarded, yet somehow built the easiest, most meaningful bond that neither of us saw coming.",
      },
      {
        id: "trust",
        category: "Growth",
        title: "The trust we built",
        frontIcon: "Heart",
        highlight: "From guarded to grounded",
        message:
          "We met as strangers who could barely trust each other. Slowly, through conversations, quiet moments, and showing up, that hesitation turned into knowing I have someone real in my corner. That trust is priceless.",
      },
      {
        id: "connection",
        category: "The Bond",
        title: "That special connection",
        frontIcon: "Star",
        highlight: "Just like you said",
        message:
          "What we have right now is truly a special connection, exactly like you said. It's rare to find someone who understands you without explanations, who makes the heavy days lighter and the good days unforgettable.",
      },
      {
        id: "gratitude",
        category: "Gratitude",
        title: "Reasons you're appreciated",
        frontIcon: "Smile",
        highlight: "Unapologetically you",
        message:
          "Your honesty, your sudden laughter, your loyalty, and the warmth you bring into ordinary conversations. Thank you for staying, for opening your heart, and for being the incredible person you are.",
      },
    ] as AppreciationCard[],
  },

  // Scene 05 — A Little Message (Editorial Letter)
  letter: {
    header: "A little something I wanted you to know.",
    salutation: "Hey Vale,",
    specialQuote:
      "I never thought we'd stay this long together, but let's say that it was destiny. We met as strangers who could barely trust each other, but now look at us... what we have right now is a special connection, like you said.",
    paragraphs: [
      "Happy birthday!",
      "Looking back at how everything started, it still amazes me. We began as two guarded strangers who could barely trust each other, uncertain of what tomorrow held. Yet day by day, conversation by conversation, destiny did its quiet work.",
      "Now look at us. What we have right now is a genuinely special connection — rare, honest, and something I hold with deep appreciation.",
      "I hope this new chapter brings you countless reasons to smile, unexpected adventures, beautiful memories, and opportunities that make you so proud of yourself.",
      "Keep being unapologetically yourself. Never lose the little quirks, the quiet strength, and the kind heart that make you who you are.",
      "You deserve good things, wonderful experiences, and people who genuinely appreciate having you in their world.",
      "Here's to another year of becoming, discovering, laughing, and living. Happy birthday, Vale — have an absolutely wonderful one!",
    ],
    signoff: "Wishing you the happiest year ahead,",
    signature: "A Friend Who Cherishes Our Connection",
  },

  // Scene 06 — The Surprise Box
  surpriseBox: {
    title: "A Special Delivery",
    instruction: "Tap the box to open your birthday surprise",
    openedInstruction: "You opened it! ✨",
    mainMessage: "ONE MORE YEAR OF BEING WONDERFULLY YOU.",
    secondaryMessage:
      "From hesitant strangers to an unbreakable connection — congratulations on officially unlocking another year of adventures together!",
  },

  // Scene 07 — The Final Birthday Reveal
  finale: {
    headline: "HAPPY BIRTHDAY, VALE!",
    subheadline: "Here's to destiny, the trust we built, and this special connection.",
    cakeInstruction: "Tap the candle to make your secret birthday wish! 🎂",
    wishMadeText: "Wish locked in! May it come true this year ✨",
    replayButton: "Relive the Journey",
    celebrateMoreButton: "Launch More Confetti 🎊",
    footerText: "Made with care, gratitude & destiny, just for Vale.",
  },
}
