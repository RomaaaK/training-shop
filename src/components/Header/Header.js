import Container from '../Container/Container'
import './Header.style.scss'
import Icon from '../Icon/Icon'

function Header() {
    return (
        <header className='header'>
            <div className='header__top-bar'>
                <Container className='header__container'>
                    <div className='contacts header__contacts'>
                        <div className='contacts__phone'><Icon icon='phone' size='small' /><p>+375 29 100 20 30</p></div>
                        <div className='contacts__address'><Icon icon='location-marker' size='small' /><p>Belarus, Gomel, Lange 17</p></div>
                        <div className='contacts__working-hours'><Icon icon='clock' size='small' /><p>All week 24/7</p></div>
                    </div>
                    <div className='social-link header__social-link'>
                        <ul className="social-list list">
                            <li>
                                <a href="/">
                                    <Icon icon='facebook' size='small' />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <Icon icon='twitter' size='small' />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <Icon icon='instagram' size='small' />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <Icon icon='pinterest' size='small' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
                <Container className='header__container header__bottom-bar'>
                    <div className='header__logo logo'>
                        <a className='logo__link link' href='/'>CleverShop</a>
                    </div>
                    <div className='header__navigation'>
                        <nav className='navigation'>
                            <ul className='navigation__list list'>
                                <li className='navigation__item'>
                                    <a className='navigation__link link' href='/'>About Us</a>
                                </li>
                                <li className='navigation__item'>
                                    <a className='navigation__link link' href='/'>Women</a>
                                </li>
                                <li className='navigation__item'>
                                    <a className='navigation__link link' href='/'>Men</a>
                                </li>
                                <li className='navigation__item'>
                                    <a className='navigation__link link' href='/'>Beauty</a>
                                </li>
                                <li className='navigation__item'>
                                    <a className='navigation__link link' href='/'>Accessories</a>
                                </li>
                                <li className='navigation__item'>
                                    <a className='navigation__link link' href='/'>Blog</a>
                                </li>
                                <li className='navigation__item'>
                                    <a className='navigation__link link' href='/'>Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='header__btn-group btn-group'>
                        <ul className='btn-group__list list'>
                            <li>
                                <button className='btn btn--icon'>
                                    <Icon icon='search' />
                                </button>
                            </li>
                            <li>
                                <button className='btn btn--icon'>
                                    <Icon icon='globe' />
                                </button>
                            </li>
                            <li>
                                <button className='btn btn--icon'>
                                    <Icon icon='user' />
                                </button>
                            </li>
                            <li>
                                <button className='btn btn--icon'>
                                    <span className='btn__count'>2</span>
                                    <Icon icon='shopping-bag' />
                                </button>
                            </li>
                        </ul>
                    </div>
                </Container>
        </header>
    )
}

export default Header