//Importing useContext to Use DataContext
import { useContext } from "react";


//Importing Data Context
import { DataContext } from "../../../App";

//Importing Country Component
import CountryArea from "./CountryArea/CountryArea"

//Importing State Component
import StateArea from "./StateArea/StateArea";


function AllCasesArea(){

    //Getting Data for Country
    const { countryData } = useContext(DataContext);


    return(
        <div className="AllCasesArea">
            <CountryArea data={countryData}/>
            <StateArea/>
        </div>
    )
}

export default AllCasesArea;