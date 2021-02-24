const List = ({ list }) => {
  //console.log(list);
  return (
    <aside className="bestseller-lists">
      <h2>NYT Best Sellers Lists</h2>
      {list.map((item, i) => {
        const { display_name: name, list_name_encoded: encoded } = item;
        console.log(item);
        return (
          <a key={i} id={encoded}>
            {name}
          </a>
        );
      })}
    </aside>
  );
};

export default List;
