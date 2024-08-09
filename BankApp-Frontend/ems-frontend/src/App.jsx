
import './App.css'
import AddressComponent from './components/AddressComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListAddressComponent from './components/ListAddressComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent'
import UserComponent from './components/UserComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            <Route path ='/' element = { <ListAddressComponent/> }></Route>
            <Route path ='/addresses' element = { <ListAddressComponent/> }></Route>
            <Route path = '/add-address' element = { <AddressComponent/> } ></Route>
            <Route path = '/edit-address/:id' element = { <AddressComponent/> }></Route>
            <Route path = '/users' element = { <ListUserComponent/> }></Route>
            <Route path = '/add-user' element = { <UserComponent/>}></Route>
          </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
