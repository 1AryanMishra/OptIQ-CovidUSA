//CSS
import './css/Loading.css';

//Loading Icons
import { AiOutlineLoading } from 'react-icons/ai';


function Loading(){
    return(
        <div className="LoadingArea">
            <AiOutlineLoading size='3rem' className='LoadingIcon'/>
            <h1 className="Loading">Loading...</h1>
        </div>
    )
}


export default Loading;