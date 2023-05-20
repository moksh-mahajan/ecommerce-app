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
    category: "rolePlaying",
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
    category: "action",
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
    category: "action",
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
    category: "adventure",
  },
];
