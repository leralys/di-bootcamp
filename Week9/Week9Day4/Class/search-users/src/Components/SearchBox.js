const SearchBox = (props) => {
    return (
        <input onChange={props.handleChange} type="text" style={{ width: '300px' }} />
    )
}



export default SearchBox;