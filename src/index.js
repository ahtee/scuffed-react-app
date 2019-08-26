import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function RootComponent() {
    return <App />;
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));