const Tag = ({ type }) => {
  return <span className={`${type.toLowerCase()}-tag tag`}>{type}</span>;
};

export default Tag;
