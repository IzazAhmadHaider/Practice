import React from "react";

function Complexobj() {
  const library = {
    fiction: {
      authors: {
        "J.K. Rowling": [
          { title: "Harry Potter and the Philosopher's Stone", year: 1997 },
          { title: "Harry Potter and the Chamber of Secrets", year: 1998 },
        ],
        "George Orwell": [
          { title: "1984", year: 1949 },
          { title: "Animal Farm", year: 1945 },
        ],
      },
    },
    nonFiction: {
      authors: {
        "Yuval Noah Harari": [
          { title: "Sapiens: A Brief History of Humankind", year: 2011 },
          { title: "Homo Deus: A Brief History of Tomorrow", year: 2015 },
        ],
        "Malcolm Gladwell": [
          { title: "Outliers", year: 2008 },
          { title: "Blink", year: 2005 },
        ],
      },
    },
  };

  const newarr = Object.entries(library);
  console.log(newarr);

  const sndarr = newarr.flatMap(([genre, { authors }]) =>
    Object.entries(authors).flatMap(([author, books]) =>
      books.map(book => ({
        genre: genre.charAt(0).toUpperCase() + genre.slice(1),
        author,
        title: book.title,
        year: book.year
      }))
    )
  );

  return (
    <div>
      {sndarr.map((element, index) => (
        <div style={{ backgroundColor: `hsl(${index * 30}, 100%, 75%)` }} key={index}>
          <div>{element.genre}</div>
          <div>{element.author}</div>
          <div>{element.title}</div>
          <div>{element.year}</div>
        </div>
      ))}
    </div>
  );
}

export default Complexobj;
