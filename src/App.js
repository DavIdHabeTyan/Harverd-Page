import './App.css';
import {useEffect, useState} from "react";

import HeaderBar from "./components/header/headerBar";

import SearchBar from "./components/header/searchBar";

import DivisionContainer from "./components/divisionContainer";

import {API_URL} from "./constans/api/index"
import InfoSection from "./components/infoSection";
import Pagination from "./components/pagination";


function App() {
   const loadCountPerPage = 10;
   const [offset, setPageOffset] = useState(0)
   const [data, setData] = useState({
      info: {},
      records: [],
   });

   useEffect(() => {
      fetch(`${API_URL}?load_amount=${loadCountPerPage}&offset=${offset}`)
         .then(res => res.json())
         .then(res => setData(res));

         // .then(res => setData(prev => ({
            // records: [...prev.records, ...res.records],
            //    info: {...prev.info, ...res.info}
         // })))
   }, [offset]);


   function handleLOadMore ()  {
      setPageOffset(offset + loadCountPerPage);
   }

   function handlePageClick(page) {
      console.log(page, "data")
      setPageOffset(loadCountPerPage * (page - 1) )
   }


   return (
      <div className="App">
         <HeaderBar/>
         <SearchBar/>
         <div className={"content"}>
            {/*<section className={"info"}>*/}
            {/*   /!*<InfoSection info={data.info}/>*!/*/}
            {/*</section>*/}
            <section className={"divisions"}>
              <DivisionContainer
                  records={data.records}
               />
               {/*<button onClick={handleLOadMore}>Load more</button>*/}
               <Pagination totalPages={data.info.pages} handlePageClick={handlePageClick}/>
            </section>
         </div>

      </div>
   );
}

export default App;
