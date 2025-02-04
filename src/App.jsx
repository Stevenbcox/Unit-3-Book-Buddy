import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import bookLogo from './assets/books.png'
import Navigation from "./components/Navigation";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [bookId, setBookId] = useState(null)

  return (
    <>
        <header>
            <Navigation/>
        </header>

        <div id={'main-section'}>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
        <Routes>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'/books/:id'} element={<Register/>}/>
            <Route path={'/books'} element={<Books/>}/>
            <Route path={'/book/:id'} element={<SingleBook/>}/>
        </Routes>


      {/*<p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>*/}

      {/*<p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>*/}

      {/*<p>Don't forget to set up React Router to navigate between the different views of your single page application!</p>*/}
        </div>
    </>
  )
}

export default App
