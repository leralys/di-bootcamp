const Select = (props) => {
    // console.log(props.countries)
    return (
        < select onChange={props.handleChange}>
            <option>Select</option>
            {
                props.arr.map((el) => {
                    return <option key={el.country_id || el.city_id}
                        value={el.country_id || el.city_id}>
                        {el.country || el.city}
                    </option>
                })
            }
        </select >
    )
}

export default Select;