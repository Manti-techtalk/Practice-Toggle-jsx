import React, { useState } from 'react';

function Toggle() {
    const [toggle, setToggle] = useState(false);

    const toggleItem = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <div>
                <button onClick={toggleItem}>Click Me</button>
            </div>
            {toggle ? (
                <>
                    <h1>Eat</h1>
                    <h1>Code</h1>
                    <h1>Sleep</h1>
                </>
            ) : (
                <>
                    <h1>Go Home</h1>
                    <h1>Pickup</h1>
                    <h2>Play</h2>
                </>
            )}
        </>
    );
}

export default Toggle;
