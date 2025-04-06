import React from 'react';

const Sidebar = ({ friends }) => {
    return (
        <div className="sidebar">
            <h3>Friend List</h3>
            <ul className="friends-list">
                {friends.map((friend, index) => (
                    <li key={index} className="friend-item">
                        <span className="friend-avatar">👤</span>
                        <span className="friend-name">{friend}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar; 