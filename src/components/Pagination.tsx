import { useEffect, useState } from "react";

import "react-responsive-pagination/themes/classic.css";

import ReactPaginate from "react-paginate";

import {
  Retailer,
  RetailerCustomer,
  RetailerGadget,
  RetailerSale,
} from "../lib/types";

const PaginationCon = ({
  itemsPerPage,
  items,
  setItems,
  pageCount,
  setPageCount,
}: {
  itemsPerPage: number;
  items: Retailer[] | RetailerCustomer[] | RetailerGadget[] | RetailerSale[];
  setItems: (items) => void;
  pageCount: number;
  setPageCount: (page: number) => void;
}) => {
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  return (
    <div className="mb-40 flex items-center justify-center w-full flex-col ">
      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={(e) => handlePageClick(e)}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          marginPagesDisplayed={5}
          containerClassName="pagination"
          activeClassName="active"
        />
      )}
    </div>
  );
};

export default PaginationCon;
