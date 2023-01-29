import './main-page.css';

import { Link} from 'react-router-dom';

import logo from './logo-clevertec.png';
import avatar from './avatar.png';
import facebook from './social1.png';
import instagram from './social2.png';
import vk from './social3.png';
import linkedin from './social4.png';

export const MainPage = () => (
    <section className='main-page'>
        <div className="header">
            <div className="logo">
                <div className="logoClevertec"><img src={logo} alt="logo" /></div>
                <div className="logoName">Cleverland</div>
            </div>
            <div className="nameOfPage">Библиотека</div>
            <div className="person">
                <div className="hiName">
                    Привет, Иван!
                </div>
                <div className="avatar"><img src={avatar} alt="avatar" /></div>
            </div>
        </div>
        <div className="container">
        <div className="menu">
            <div className="tab1">
                <div className="active">
                    <Link to='/'>Витрина книг</Link>
                </div>
                <hr />
                <div className="categories">
                    <div className="allBooks">Все книги</div>
                    <div className="books">
                        <div className="book">
                            <div className="nameOfBook">Бизнес-книги</div>
                            <div className="amount">14</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Детективы</div>
                            <div className="amount">8</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Детские книги</div>
                            <div className="amount">14</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Зарубежная литература</div>
                            <div className="amount">2</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">История</div>
                            <div className="amount">5</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Классическая литература</div>
                            <div className="amount">12</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Книги по психологии</div>
                            <div className="amount">11</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Компьютерная литература</div>
                            <div className="amount">54</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Культура и искусство</div>
                            <div className="amount">5</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Наука и образование</div>
                            <div className="amount">2</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Публицистическая литература</div>
                            <div className="amount">0</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Справочники</div>
                            <div className="amount">10</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Фантастика</div>
                            <div className="amount">12</div>
                        </div>
                        <div className="book">
                            <div className="nameOfBook">Юмористическая литература</div>
                            <div className="amount">8</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab2">
                <Link to='/terms'>Правила пользования</Link>
            </div>
            <div className="tab3">
                <Link to='/offer'>Договор оферты</Link>
            </div>
        </div>
        <div className="mainBooks">1</div>
        </div>
        <div className="footer">
            <div className="copyrights">
            © 2020-2023 Cleverland. Все права защищены.
            </div>
            <div className="socials">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={vk} alt="vk" />
                <img src={linkedin} alt="linkedin" />
            </div>
        </div>
    </section>
);
