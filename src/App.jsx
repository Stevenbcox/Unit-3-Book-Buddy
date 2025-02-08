import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import bookLogo from './assets/books.png';
import Navigations from './components/Navigations';
import Books from './components/Books';
import SingleBook from './components/SingleBook';
import Register from './components/Register';
import Login from './components/Login';
import Account from './components/Account';

function App() {
    const [token, setToken] = useState(null);

    return (<>
        <header>
            <Navigations token={token}/>
        </header>
        <div id='main-section'>
            <h1><img id='logo-image' src={bookLogo} alt="Library Logo"/>Library App</h1>
            <Routes>
                <Route path='/' element={<Login setToken={setToken}/>}/>
                <Route path='/register' element={<Register setToken={setToken}/>}/>
                <Route path='/catalog' element={<Books/>}/>
                <Route path='/catalog/:bookid' element={<SingleBook/>}/>
                <Route path='/my-account' element={<Account token={token}/>}/>
            </Routes>
        </div>
    </>);
}

export default App;