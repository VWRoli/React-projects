const List = ({ data, setList }) => {
  const listData = data.results;

  return (
    <aside className="bestseller-lists">
      <h2>NYT Best Sellers Lists</h2>
      {listData.map((item, i) => {
        const { display_name: name, list_name_encoded: encoded } = item;

        return (
          <a key={i} id={encoded} onClick={() => setList(encoded)}>
            {name}
          </a>
        );
      })}
    </aside>
  );
};

export default List;
