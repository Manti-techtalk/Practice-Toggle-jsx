import React, { useReducer } from 'react';

// Define the initial state
const initialState = { isDarkMode: false };

// Define the reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { isDarkMode: !state.isDarkMode };
        default:
            throw new Error();
    }
}

function ThemeToggle() {
    // Use the useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    // Define the styles for light and dark modes
    const lightStyle = {
        backgroundColor: 'white',
        color: 'black',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    };

    const darkStyle = {
        backgroundColor: 'black',
        color: 'white',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    };

    return (
        <div style={state.isDarkMode ? darkStyle : lightStyle}>
            <h1>{state.isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
            <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
                Toggle Theme
            </button>
        </div>
    );
}

export default ThemeToggle;
