import { connect } from 'react-redux';
import { changeSearchText } from '../redux/actions/changeSearchText';
import { requestWeathercast } from '../redux/actions/requestWeathercast';
// import { useState, useEffect } from 'react';
import { InputBase } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';
import './styles/Search.css';

const Search = (props) => {
    return (
        <div className='Search-input'>
            <InputBase onChange={props.handleChange} value={props.searchText}
                autoComplete='off' placeholder='Search City'
                style={{ width: '100%' }}
            />
            <LoadingButton endIcon={<SearchIcon />}
                type='button' sx={{ p: '20px' }} aria-label='search'
                loading={props.loading} loadingPosition='end'
                variant='text' onClick={props.handleClick}
            />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        searchText: state.searchText,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange: (e) => dispatch(changeSearchText(e.target.value)),
        handleClick: () => dispatch(requestWeathercast())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);