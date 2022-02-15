//Importing useContext to Use Data Context
import { useContext } from 'react';


//Importing Data Context
import { DataContext } from '../../../../App';

//Importing State Component
import State from './State/State';



function StateArea(){

    //Getting States Data
    const { statesData } = useContext(DataContext);


    return(
        <div className="StateArea">
            <p className='SomeText'>Here is some Data From {statesData.length} States of United States.</p>
            <div className='Matrix'>
                <p className='StateColumn'>State</p>
                <p className='TotalColumn'>Total</p>
                <p className='ActiveColumn'>Active</p>
                <p className='RecoveredColumn'>Recovered</p>
                <p className='DeathsColumn'>Deaths</p>
            </div>
            {
                statesData.map(stateData => <State data={stateData} key={stateData.hash}/>)
            }
        </div>
    )
}

export default StateArea;