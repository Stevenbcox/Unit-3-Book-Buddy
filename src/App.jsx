import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import bookLogo from './assets/books.png';
import Navigations from './components/Navigations';
import Books from './components/Books';
import SingleBook from './components/SingleBook';
import Register from './components/Register';
import Login from './components/Login';
import Account from './components/Account';

function App() {
    const [token, setToken] = useState(null);

    return (<Router>
        <header>
            <Navigations token={token}/>
        </header>
        <div id='main-section'>
            <h1><img id='logo-image' src={bookLogo} alt="Library Logo"/>Library App</h1>
            <Routes>
                <Route path='/' element={<Login setToken={setToken}/>}/>
                <Route path='/login' element={<Login setToken={setToken}/>}/>
                <Route path='/register' element={<Register setToken={setToken}/>}/>
                <Route path='/books' element={<Books/>}/>
                <Route path='/books/:bookid' element={<SingleBook/>}/>
                <Route path='/my-account' element={<Account token={token} setToken={setToken}/>}/>
            </Routes>
        </div>
    </Router>);
}

export default App;