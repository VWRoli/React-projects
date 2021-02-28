import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Pagination = ({ numPages, curPage, setCurPage }) => {
  //Adjusting the pages
  const adjustPage = (amount) => {
    setCurPage((prevCurPage) => prevCurPage + amount);
  };
  return (
    <div className="pagination-container">
      {curPage !== 1 && (
        <button className="pagination-btn" onClick={() => setCurPage(1)}>
          1
        </button>
      )}
      {curPage !== 1 && (
        <button className="pagination-btn" onClick={() => adjustPage(-1)}>
          <FaChevronLeft />
        </button>
      )}

      <button className="pagination-btn active-page">{curPage}</button>
      {numPages !== curPage && (
        <button className="pagination-btn" onClick={() => adjustPage(1)}>
          <FaChevronRight />
        </button>
      )}
      {numPages !== curPage && (
        <button className="pagination-btn" onClick={() => setCurPage(numPages)}>
          {numPages}
        </button>
      )}
    </div>
  );
};

export default Pagination;
