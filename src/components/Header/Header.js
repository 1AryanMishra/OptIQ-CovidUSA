//Icons
import { FaHandsHelping } from 'react-icons/fa';
import { MdOutlineCoronavirus } from 'react-icons/md';

function Header(){
    return(
        <header>
            <h1 className="Logo">C<MdOutlineCoronavirus size='2rem' color='red'/>vidTrack</h1>
            <a href='https://www.cdc.gov/coronavirus/2019-ncov/index.html' className='AskHelp'>Help!<FaHandsHelping className='help' size="2rem" color='#fff'/></a>
        </header>
    )
}

export default Header;