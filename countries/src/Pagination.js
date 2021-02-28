import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Pagination = ({ countries }) => {
  const itemsPerPage = 15;
  const totalItems = countries.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log(totalPages);
  return (
    <div className="pagination-container">
      <button className="pagination-btn">1</button>
      <button className="pagination-btn">
        <FaChevronLeft />
      </button>
      <button className="pagination-btn">4</button>
      <button className="pagination-btn">
        <FaChevronRight />
      </button>
      <button className="pagination-btn">{totalPages}</button>
    </div>
  );
};

export default Pagination;
