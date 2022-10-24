import React, {useState} from 'react';

const pageCount = [1, 2, 3, 4, 5]


const Pagination = ({handlePageClick ,  totalPages}) => {

   const [activeIndex, setActiveIndex] = useState(1)

   return (
      <div className={"paginationWrapper"}>
         <button>Prev</button>
         {pageCount.map(page =>
            <button
               className={activeIndex === page ? "active": ""}
               onClick={()=> handlePageClick(page)}
               key={page}>
               {page}
            </button> )}
         <button>Next</button>
      </div>
   );
};

export default Pagination;