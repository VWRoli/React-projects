import HomeListItem from './HomeListItem';

const HomeList = ({ coins }) => {
  return (
    <>
      {coins.map((coin) => {
        return <HomeListItem key={coin.id} coin={coin} />;
      })}
    </>
  );
};

export default HomeList;
