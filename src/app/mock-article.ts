import { Article } from "./article";

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "My First article",
    content: "",
    descriptiom: "This is my first article! It's great. Please read it. :)",
    key: "my-first-article",
    date: new Date(),
    imageUrl: "https://angular.io/assets/images/logos/angular/logo-nav@2x.png",
  },
  {
    id: 2,
    title: "My Second article",
    content: "",
    descriptiom: "Also a greate article!",
    key: "my-second-article",
    date: new Date(),
    imageUrl: "https://angular.io/assets/images/logos/angular/shield-large.svg",
  },
];
