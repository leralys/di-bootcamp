import { useDispatch, useSelector } from 'react-redux';
import allActions from '../redux/actions/index';
// import { useState, useEffect } from 'react';
import { InputBase } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';
import './styles/Search.css';

const Search = (props) => {
    // const [loading, setLoading] = useState(false);
    // const handleClick = () => {
    //     setLoading(true);
    // }
    const text = useSelector(state => state.city.searchText);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(allActions.changeSearchText(e.target.value))
    }
    const handleClick = () => {
        dispatch(allActions.requestCityKey(text));
    }
    return (
        <div className='Search-input'>
            <InputBase onChange={handleChange} value={text}
                autoComplete='off' placeholder='Search City'
                style={{ width: '100%' }}
            />
            <LoadingButton endIcon={<SearchIcon />}
                type='button' sx={{ p: '20px' }} aria-label='search'
                loading={props.loading} loadingPosition='end'
                variant='text' onClick={handleClick}
            />
        </div>
    );
}

export default Search;