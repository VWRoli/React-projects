import Book from './Book';

function Books({ books }) {
  console.log(books);
  return (
    <section>
      {books.map((book) => (
        <Book key={book.rank} book={book} />
      ))}
    </section>
  );
}

export default Books;
