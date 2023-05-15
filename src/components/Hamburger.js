import { slide as Menu } from 'react-burger-menu'


export default function Hamburger() {

    return (
        <Menu className='w-20 text-blue-500 bg-red-500'>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a className="menu-item--small" href="">Settings</a>
        </Menu>
    )
}