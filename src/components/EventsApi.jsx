import event1 from "../images/HERO-IMG.jpg";
import prayer_breakfast from "../images/prayer_breakfast.jpg";

import event2 from "../images/test.jpg";
import women_in_prison from "../images/women_in_prison.jpg";
import adapt_a_child from "../images/adapt_a_child.jpg";
import counselling_program from "../images/counselling_program.jpeg";
export const EventApi = [
  {
    id: 1,
    image: `${prayer_breakfast}`,
    date: [
      {
        day: "27th",
        MonthAndYear: "Nov,2021",
      },
    ],
    Title: "Prayer breakfast at wundanyi prison",
    Text: " Lorem ipsum dolor sit amet c amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    image: `${adapt_a_child}`,

    date: [
      {
        day: "30th",
        MonthAndYear: "oct,2021",
      },
    ],
    Title: "Adopt a child program",
    Text: "We have a program to adopting a child in prison.We take care of a child and the mother once in month",
  },
  {
    id: 3,
    image: `${women_in_prison}`,

    date: [
      {
        day: "26th",
        MonthAndYear: "Nov,2021",
      },
    ],
    Title: "Women in prison",
    Text: "Program tailor made to empower,counsel equip women in kenyan prisons ",
  },
  {
    id: 4,
    image: `${counselling_program}`,

    date: [
      {
        day: "20th",
        MonthAndYear: "Aug,2021",
      },
    ],
    Title: "Counselling program",
    Text: " Due to the challenges the officers went through,mental health is very crucial and through counselling many of the are empowered",
  },
];
