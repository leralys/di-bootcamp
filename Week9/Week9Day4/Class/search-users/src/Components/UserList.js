import React from 'react';

const UserList = (props) => {
    // console.log(props);
    return (<div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
            props.users.map(el => {
                return <div key={el.id} style={{
                    border: '1px solid pink',
                    padding: '15px', background: 'white', color: 'black',
                    margin: '10px'
                }}>
                    <p>{el.name}</p>
                    <p>{el.username}</p>
                    <p>{el.email}</p>
                </div>
            })
        }
    </div>

    )

}



export default UserList;