//CSS
import './css/CountryArea.css';


function CountryArea({data}){
    return(
        <article className="CountryData">
            <p className="SomeText">In United States of America, currently there are <b>{data.hospitalized} people Hospitalized</b>. Also, there are <b>{data.inIcuCurrently} people in ICU Currently</b>. 
            There is an <b>{data.totalTestResultsIncrease} Increase in Test Results</b>.</p>
            <div className="CountryMatrix">
                <p className="MatrixLabel">Total</p>
                <p className="MatrixValue">{data.total ? data.total : 'No Data'}</p>
                <p className="MatrixLabel">Active</p>
                <p className="MatrixValue">{data.positive ? data.positive : 'No Data'}</p>
                <p className="MatrixLabel">Recovered</p>
                <p className="MatrixValue">{data.recovered ? data.recovered : 'No data'}</p>
                <p className="MatrixLabel">Deaths</p>
                <p className="MatrixValue">{data.death ? data.death : 'No Data'}</p>
            </div>
        </article>
    )
}


export default CountryArea;