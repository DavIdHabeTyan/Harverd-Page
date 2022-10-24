import './App.css';
import HeaderBar from "./components/header/headerBar";
import SearchBar from "./components/header/searchBar";
import {API_URL} from "./constans/api/index"
import {useEffect, useState} from "react";
import DivisionContainer from "./components/divisionContainer";

function App() {
const [data, setData] = useState({});

   useEffect(() => {
      fetch(API_URL).then(res => res.json())
         .then(res => setData(res))
   },[])

   return (
      <div className="App">
         <HeaderBar/>
         <SearchBar/>
         <section className={"info"}>

         </section>
         <section className={"division"}>
               <DivisionContainer
                  records={data.records}
               />
         </section>
      </div>
   );
}

export default App;
