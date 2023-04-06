import React, { useState, useEffect } from "react";
import "./Pagination.scss";

export function Pagination({ totalCount, limit, activePage, setPage }) {
  const pageCount = Math.ceil(totalCount / limit);
  const pages = new Array(pageCount).fill().map((_, i) => i + 1);
  const [showPages, setShowPages] = useState(pages.slice(0, 4));

  useEffect(() => {
    let start = 0;
    let end = activePage + 4;
    if (pages.length > 4) {
      if (activePage === 1) {
        start = activePage - 1;
        end = activePage + 3;
      }

      if (activePage > 1) {
        start = activePage - 2;
        end = activePage + 2;
      }

      if (activePage === pages[pages.length - 2]) {
        start = activePage - 3;
        end = activePage + 1;
      }

      if (activePage === pages[pages.length - 1]) {
        start = activePage - 4;
        end = activePage;
      }
    }
    setShowPages(pages.slice(start, end));
  }, [activePage]);

  return (
    <>
      {pages.length > 1 ? (
        <div className="pagination-wrapper">
          <ul className="pagination mt-3">
            <li
              className={`pagination-item pagination-item--sides${
                activePage === 1 || pages.length < 5
                  ? " pagination-item--hidden"
                  : ""
              }`}
              onClick={() => setPage(1)}
            >
              &lt;
            </li>
            {showPages.map((page) => (
              <li
                key={page}
                className={`pagination-item${
                  activePage === page ? " pagination-item--active" : ""
                }`}
                onClick={() => setPage(page)}
              >
                {page}
              </li>
            ))}
            <li
              className={`pagination-item pagination-item--sides${
                activePage === pages[pages.length - 1] || pages.length < 5
                  ? " pagination-item--hidden"
                  : ""
              }`}
              onClick={() => setPage(pages[pages.length - 1])}
            >
              &gt;
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
