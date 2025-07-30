import React from "react";
import TaskpilotBook from "../assets/TaskpilotBook.png";
import FitverseBook from "../assets/FitverseBook.png";
const books = [
  {
    title: "FitVerse",
    author: "Jay Panchal",
    image: [FitverseBook],
  },
  {
    title: "Task Pilot",
    author: "Jay Panchal",
    image: [TaskpilotBook],
  },
];

const CaseStudies = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center ">Case Studies</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
        {books.map((book) => (
          <div key={book.title} className="text-center">
            <img src={book.image} alt={book.title} className="w-128 rounded" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
