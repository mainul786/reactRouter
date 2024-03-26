import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userId}  = useParams();
    console.log(userId)
    return (
        <div>
            <h4>User Dynamic: {userId}</h4>
        </div>
    );
}

export default User;