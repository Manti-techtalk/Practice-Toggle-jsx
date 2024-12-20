import React, { useState } from 'react';

function UserRole() {
    const [role, setRole] = useState('guest'); // Initial role is 'guest'

    const displayGuestContent = () => {
        setRole('guest');
    };

    const displayAdminContent = () => {
        setRole('admin');
    };

    const displayUserContent = () => {
        setRole('user');
    };

    return (
        <div>
            <button onClick={displayGuestContent}>Guest</button>
            <button onClick={displayAdminContent}>Admin</button>
            <button onClick={displayUserContent}>User</button>
            
            {role === 'guest' && (
                <div>
                    <h1>Welcome Guest</h1>
                    <p>Please log in to access more features.</p>
                </div>
            )}
            
            {role === 'admin' && (
                <div>
                    <h1>Welcome Admin</h1>
                    <p>Manage the system settings and user accounts.</p>
                </div>
            )}
            
            {role === 'user' && (
                <div>
                    <h1>Welcome User</h1>
                    <p>View your profile and update your information.</p>
                </div>
            )}
        </div>
    );
}

export default UserRole;
