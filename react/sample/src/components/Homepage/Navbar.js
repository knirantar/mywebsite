import React,{useState} from 'react'
import Modal from 'react-modal'
import Auth from '../Auth'
import './nav.css';


Modal.setAppElement('#root')
function Navbar() {
      const[modalIsOpen,setModalIsOpen] = useState(false)

      return (
        <div>
          <Modal className="modal-form" isOpen = {modalIsOpen} onRequestClose = {() => setModalIsOpen(false)} shouldCloseOnOverlayClick = {true}>
            <Auth setModalIsOpen = {setModalIsOpen}></Auth>
          </Modal>
          <header>
          <nav>
          <div className = "logo"><h1>Logo</h1></div>
            <ul>
              <li><a href = "#">Home</a></li>
              <li><a href = "#">About</a></li>
              <li><a href = "#">Link1</a></li>
              <li><a onClick = {() => setModalIsOpen(true)}>Signin</a></li>
            </ul>
          </nav>
        </header>
        </div>
      );
}

export default Navbar;
