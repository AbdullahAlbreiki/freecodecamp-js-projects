let books = [
  {
    title: "test title 1",
    authorName: "test author 1",
    releaseYear: 2006,
  },
  {
    title: "test title 2",
    authorName: "test author 2",
    releaseYear: 1949,
  },
  {
    title: "test title 3",
    authorName: "test author 3",
    releaseYear: 2007,
  }
];

function sortByYear(book1,book2){
  if(book1.releaseYear<book2.releaseYear) return -1;
  if(book1.releaseYear>book2.releaseYear) return 1;
  return 0;
}

let filteredBooks = books.filter(book=>book.releaseYear>1950);

filteredBooks.sort(sortByYear);


console.log(filteredBooks);