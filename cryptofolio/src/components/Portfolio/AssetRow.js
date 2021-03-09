const AssetRow = ({ coin }) => {
  console.log(coin);
  const {
    name,
    image,
    symbol,
    current_price: price,
    price_change_percentage_24h: changePercentage,
    price_change_24h: changeValue,
  } = coin;
  return (
    <tr>
      <td>
        <img src={image} alt={name} width="30" height="30" />
        {name}
        {symbol}
      </td>
      <td>{price}</td>
      <td>{changePercentage}</td>
      <td>{price}</td>
      <td>{changeValue}</td>
    </tr>
  );
};

export default AssetRow;
