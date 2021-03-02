import Book from './Book';
import Loading from './Loading';
import Error from './Error';

function Books({ booksData, isListError, isListLoading }) {
  //Loading screen
  if (isListLoading) {
    return <Loading />;
  }

  //Error screen
  if (isListError) {
    return <Error />;
  }
  const books = booksData.results.books;

  const { list_name: list, previous_published_date: date } = booksData.results;

  return (
    <>
      <section className="booklist-container">
        <header className="list-header">
          <h2>{list}</h2>
          <p>{date}</p>
        </header>
        <div className="book-list">
          {books.map((book) => (
            <Book key={book.rank} book={book} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Books;
