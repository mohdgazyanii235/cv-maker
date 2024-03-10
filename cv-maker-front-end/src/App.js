import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';   
import Editor from './pages/editor';




function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/editor" element={<Editor />} />
            </Routes>
        </div>
    );
}

export default App;
