//Icons
import { FaTwitter } from 'react-icons/fa';


function MetaData({data, twitter, stateData}){
    return(
        <div className="MetaData">
            <div className="moreUsefulInfo">
                <p className="infoLabel">Code : {data.fips}</p>
                <a href={data.covid19Site} className='infoLabel SiteLink'>State Site</a>
                <a className='infoLabel StateTwitter' href={twitter}>{data.twitter}<FaTwitter size='2rem' color='blue'/></a>
            </div>
            <p className='someMoreInfo'>
                In {stateData.state}, currently {stateData.hospitalized ? `there are ${stateData.hospitalized} people Hospitalized. Also,` : null} {stateData.inIcuCurrently ? ` there are ${stateData.inIcuCurrently} people in ICU Currently.` : null} 
                There is an <b>{stateData.totalTestResultsIncrease} Increase in Test Results</b>.
            </p>
        </div>
    )
}


export default MetaData;