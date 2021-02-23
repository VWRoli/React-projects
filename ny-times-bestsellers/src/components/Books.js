import Book from './Book';

function Books({ books }) {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.rank} book={book} />
      ))}
    </section>
  );
}

export default Books;
