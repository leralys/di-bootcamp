// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import weatherLogo from '../assets/images/weatherLogo.png';
// import './styles/Header.css';

// const Header = () => {
//     return (
//         <header className='Header'>
//             <Link id='Logo' to={'/'}>Weather App</Link>
//             <nav>
//                 <Link to={'/'}><HomeIcon fontSize='large' className='Header-navIcon' /></Link>
//                 <Link to={'/favorites'}><FavoriteIcon fontSize='large' className='Header-navIcon' /></Link>
//             </nav>
//         </header>
//     );
// }

// export default Header;






import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './styles/Header.css';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' className='Header'>
                <Toolbar>
                    <Link id='Logo' to={'/'}><Button color='inherit'>Weather App</Button></Link>
                    <nav>
                        <Link to={'/'}><Button color='inherit'><HomeIcon fontSize='large' /></Button></Link>
                        <Link to={'/favorites'}><Button color='inherit'><FavoriteIcon fontSize='large' /></Button></Link>
                    </nav>
                </Toolbar>
            </AppBar>
        </Box>
    );
}