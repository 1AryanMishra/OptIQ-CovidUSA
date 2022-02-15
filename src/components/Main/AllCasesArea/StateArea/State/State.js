//Importing Axios to Fetch Metadata for Every Particular State
import axios from 'axios';

//Importing UseState for creating DropDown Action
import { useState } from 'react';


//Importing MetaData and Loading Component
import MetaData from './MetaData/MetaData';
import Loading from './Loading/Loading';



function State({data}){

    //Declaring Variable for DropDown Action
    const [dropDown, setDropDown] = useState(false);
    const [stateMetaData, setStateMetaData] = useState(false);
    var stateTwitter = 'https://twitter.com/';
    //className="infoLabel StateTwitter" href=`intent/tweet?screen_name=${stateTwitter}.twitter&ref_src=twsrc%5Etfw

    return(
        <article className="State" onClick={() => {
            setDropDown(!dropDown);
            const MetaDataURL = `https://api.covidtracking.com/v1/states/${data.state.toLowerCase()}/info.json`
            axios.get(MetaDataURL)
            .then(res => {
                setStateMetaData(res.data);
                if(stateMetaData.twitter){
                    for(let i = 0; i<stateMetaData.twitter.length; i++){
                        if(i === 0){
                            continue;
                        }
                        stateTwitter = stateTwitter + stateMetaData.twitter[i];
                    }
                }
            })
            .catch(err => console.log(err));
            
        }}>
            <div className="DataMatrix">
                <p className="StateColumn StateName">{data.state}</p>
                <p className="TotalColumn StateData">{data.total ? data.total : 'No Data'}</p>
                <p className="ActiveColumn StateData">{data.positive ? data.positive : 'No Data'}</p>
                <p className="RecoveredColumn StateData">{data.recovered ? data.recovered : "No Data"}</p>
                <p className="DeathsColumn StateData">{data.death ? data.death : 'No Data'}</p>
            </div>
            <div className={dropDown?"StateDropDown" : "Hide"}>

                {
                    stateMetaData ? <MetaData data={stateMetaData} twitter={stateTwitter} stateData={data}/> : <Loading/>
                }
            </div>
        </article>
    )
}
//<a className="infoLabel StateTwitter" href="#"></a>

export default State;