import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Elden Ring",
    description:
      "Elden Ring is a fantasy action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game, directed by Hidetaka Miyazaki and made in collaboration with fantasy novelist George R. R. Martin, was released for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S on February 25, 2022.",
    rating: 4.0,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
    price: 3999,
    category: "Role-Playing",
  },
  {
    _id: uuid(),
    name: "Grand Theft Auto V",
    description:
      "Grand Theft Auto V is an action-adventure game developed by Rockstar North and published by Rockstar Games. It was released on September 17, 2013, for PlayStation 3 and Xbox 360, on November 18, 2014, for PlayStation 4 and Xbox One, and on April 14, 2015, for Microsoft Windows. It is the first game in the Grand Theft Auto series to be developed for the eighth generation of consoles. Set in the fictional city of Los Santos and the surrounding area, the game follows three protagonists—Michael De Santa, Trevor Philips, and Franklin Clinton—who are criminals involved in heists and other criminal activities.",
    rating: 4.5,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    price: 2999,
    category: "Action",
  },
  {
    _id: uuid(),
    name: "Red Dead Redemption 2",
    description:
      "Red Dead Redemption 2 is an action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption. It is set in the fictional American Old West of the 1890s and follows the story of Arthur Morgan, a member of the Van der Linde gang.",
    rating: 4.5,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg?20230109164036",
    price: 3999,
    category: "Action",
  },
  {
    _id: uuid(),
    name: "The Legend of Zelda: Breath of the Wild",
    description:
      "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo. It was released for the Nintendo Switch and Wii U consoles on March 3, 2017. The game is set in the fictional land of Hyrule and follows the story of Link, a Hylian knight who awakens from a 100-year slumber to find Hyrule in ruins.",
    rating: 3.5,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    price: 2999,
    category: "Adventure",
  },
  {
    _id: uuid(),
    name: "The Sims 4",
    description:
      "The Sims 4 is a life simulation game developed by Maxis and published by Electronic Arts. Create and control virtual people called Sims, and guide them through their lives. Build and customize homes, pursue careers, develop relationships, and fulfill the needs and aspirations of your Sims.",
    rating: 4.5,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Sims4_Rebrand.png/220px-Sims4_Rebrand.png",
    price: 3999,
    category: "Simulation",
  },
  {
    _id: uuid(),
    name: "Euro Truck Simulator 2",
    description:
      "Euro Truck Simulator 2 is a realistic truck simulation game developed and published by SCS Software. Take on the role of a truck driver and embark on a journey across Europe. Transport goods, build your trucking empire, and experience the life of a professional truck driver with detailed graphics, realistic physics, and an immersive open-world environment.",
    rating: 4.3,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0e/Euro_Truck_Simulator_2_cover.jpg",
    price: 2999,
    category: "Simulation",
  },
  {
    _id: uuid(),
    name: "StarCraft II",
    description:
      "StarCraft II is a real-time strategy game set in a science fiction universe. Choose from three factions, manage resources, build bases, train armies, and engage in strategic battles to defeat your opponents.",
    rating: 4.6,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/20/StarCraft_II_-_Box_Art.jpg",
    price: 2999,
    category: "Strategy",
  },
  {
    _id: uuid(),
    name: "Sid Meier's Civilization VI",
    description:
      "Sid Meier's Civilization VI is a turn-based strategy game where players build and develop their own civilization. Explore the world, research technologies, build cities, engage in diplomacy, and wage wars to achieve dominance.",
    rating: 4.7,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Civilization_VI_cover_art.jpg",
    price: 4999,
    category: "Strategy",
  },
  {
    _id: uuid(),
    name: "Super Mario Odyssey",
    description:
      "Super Mario Odyssey is an adventure game developed and published by Nintendo. Join Mario on a globe-trotting adventure to rescue Princess Peach from the clutches of Bowser. Explore vibrant and diverse kingdoms, possess objects and creatures with Mario's magical hat, and collect Power Moons to power up your airship, the Odyssey.",
    rating: 4.8,
    thumbnailUrl:
      "https://mario.wiki.gallery/images/thumb/3/37/SuperMarioOdyssey_-_NA_boxart.jpg/375px-SuperMarioOdyssey_-_NA_boxart.jpg",
    price: 4999,
    category: "Adventure",
  },
  {
    _id: uuid(),
    name: "Hogwarts Legacy",
    description:
      "Hogwarts Legacy is an upcoming action-adventure role-playing game set in the wizarding world of Harry Potter. Developed by Portkey Games and published by Warner Bros. Interactive Entertainment, the game is set in the 1800s, allowing players to create their own character and attend Hogwarts School of Witchcraft and Wizardry. Explore the vast open-world, learn magical spells, uncover secrets, and experience an immersive story filled with adventure and discovery.",
    rating: 4.9,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/Hogwarts-Legacy-cover.jpg",
    price: 4999,
    category: "Role-Playing",
  },
];
