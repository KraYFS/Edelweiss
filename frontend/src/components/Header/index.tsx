import { Link } from 'react-router-dom'
import './styles.scss'
import Contact from './components/Contact'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__info'>
        <Link to='/' className='header__logo'>
          Edelweiss
        </Link>
        <Contact />
      </div>
    </header>
  )
}

export default Header
