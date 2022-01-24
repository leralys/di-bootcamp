const UserFavoriteColors = (props) => {
    console.log(props.anim);
    return (
        <div>
            {
                props.animals.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })
            }
        </div>
    );
};
export default UserFavoriteColors;