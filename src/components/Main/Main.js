//Importing UseContext Hooks to use DataContext
import { useContext } from 'react';

//Importing Data Context for refresh State
import { DataContext } from '../../App';


//CSS
import './css/Main.css';

//Icons
import { TiRefreshOutline } from 'react-icons/ti';



//Importing AllCases Component
import AllCasesArea from './AllCasesArea/AllCasesArea';


function Main(){

    //Getting Refresh State
    const { refresh, setRefresh } = useContext(DataContext);


    return(
        <main>
            <AllCasesArea/>
            <div id='refresh' className={refresh?'Animate':'Animate'} onClick={() => setRefresh(!refresh)}><TiRefreshOutline size='3rem'/></div>
        </main>
    )
}


export default Main;