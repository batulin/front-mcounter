import React from 'react';

const UserItem = ({userItem}) => {
    return (
        <div>
            {userItem.email}
        </div>
    );
};

export default UserItem;