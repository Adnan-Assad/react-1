import React from "react";

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
  //   const totalPages = Math.ceil(blogs.length / pageSize);
  //   const renderPagination = () => {
  //     const pages = [];
  //     for (let i = 1; i <= totalPages; i++) {
  //       pages.push(
  //         <li key={i} className={i === currentPage ? "activePagination" : ""}>
  //           <a href="#" onClick={() => onPageChange(i)}>
  //             {i}
  //           </a>
  //         </li>
  //       );
  //     }
  //     return pages;
  //   };

  const totalPage = Math.ceil(blogs.length / pageSize);
  const renderPaginiationLinks = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };

  return (
    <div className="mt-8 mb-8">
      <ul className="pagination my-8 flex-wrap gap-4">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <div className="flex gap-1">{renderPaginiationLinks()}</div>
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPage}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
