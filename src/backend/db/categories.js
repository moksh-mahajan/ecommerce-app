import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Action",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg",
    description:
      "Games that focus on fast-paced, exciting gameplay that requires quick reflexes and hand-eye coordination.",
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    description:
      "Games that focus on exploration and discovery, often with a strong narrative element.",
  },
  {
    _id: uuid(),
    categoryName: "Role-Playing",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/Hogwarts-Legacy-cover.jpg",
    description:
      "Games that allow players to take on the role of a character in a fictional world, typically with a focus on character development and storytelling.",
  },
  {
    _id: uuid(),
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/93/StarCraft_box_art.jpg",
    categoryName: "Strategy",
    description:
      "Games that require players to use their wits and strategic skills to outsmart their opponents.",
  },
  {
    _id: uuid(),
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7f/Sims4_Rebrand.png",
    categoryName: "Simulation",
    description:
      "Games that simulate real-world activities, such as driving, flying, or building.",
  },
];
