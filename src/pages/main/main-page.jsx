import './main-page.css';

import { Link} from 'react-router-dom';

import logo from './logo-clevertec.png';
import avatar from './avatar.png';
import facebook from './social1.png';
import instagram from './social2.png';
import vk from './social3.png';
import linkedin from './social4.png';
import search from './search.png';
import filterButton from './filter-button.png';
import buttonIconOn from './button-icon-on.png';
import buttonIconOff from './button-icon-off.png';
import image from './image.png';
import notImage from './notImage.png';
import star from './star.png';
import notStar from './notStar.png';
import burger from './burger.png';
import miniFilter from './mini-filter.png';
import miniSearch from './mini-search.png';


export const MainPage = () => (
    <section className='main-page'>
        <div className="header">
            <Link to='/'>
                <div className="logo">
                    <div className="logoClevertec"><img src={logo} alt="logo" /></div>
                    <div className="logoName">Cleverland</div>
                </div>
            </Link>
            <div className="burgerMenu"><img src={burger} alt='burger' /></div>
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
        <div className="mainBooks">
            <div className="navigationList">
                <div className="searchWithFilterButton">
                    <div className="search"><img src={search} alt="" /></div>
                    <div className="filterButton"><img src={filterButton} alt="" /></div>
                </div>
                <div className="miniSearchWithFilterButton">
                    <div className="miniSearch"><img src={miniSearch} alt="search" /></div>
                    <div className="miniFilter"><img src={miniFilter} alt="filter" /></div>
                </div>
                <div className="buttonIcons">
                    <div className="buttonIcon" data-test-id='button-menu-view-window'><img src={buttonIconOn} alt="" /></div>
                    <div className="buttonIcon" data-test-id='button-menu-view-list'><img src={buttonIconOff} alt="" /></div>
                </div>
            </div>
            <div className="bookIcons">
                <div className="bookIcon">
                    <div className="all">
                    <div className="imageOfBook">
                        <img src={image} alt="book" />
                    </div>
                    <div className="stars">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                    </div>
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное </div>
                    <div className="author">Адитья Бхаргава, 2019</div>
                    </div>
                    <Link to='/book'>
                        <div className="button" data-test-id='card'>
                            <button type='button'>Забронировать</button>
                        </div>
                    </Link>
                </div>
                <div className="bookIcon">
                    <div className="imageOfBook">
                        <img src={image} alt="book" />
                    </div>
                    <div className="stars">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                    </div>
                    <div className="nameOfBook">Грокаем алгоритмы. </div>
                    <div className="author">Адитья Бхаргава, 2019</div>
                    <div className="button closed">
                        <button type='button'>занята до 03.05</button>
                    </div>
                </div>
                <div className="bookIcon">
                    <div className="imageOfBook">
                        <img src={image} alt="book" />
                    </div>
                    <div className="stars">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                    </div>
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное пособие для програ...</div>
                    <div className="author">Адитья Бхаргава, 2019</div>
                    <Link to='/book'>
                        <div className="button">
                            <button type='button'>Забронировать</button>
                        </div>
                    </Link>
                </div>
                <div className="bookIcon">
                    <div className="imageOfBook">
                        <img src={image} alt="book" />
                    </div>
                    <div className="stars">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                    </div>
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное пособие для програ...</div>
                    <div className="author">Адитья Бхаргава, 2019</div>
                    <Link to='/book'>
                        <div className="button">
                            <button type='button'>Забронировать</button>
                        </div>
                    </Link>
                </div>
                <div className="bookIcon">
                    <div className="imageOfBook">
                        <img src={image} alt="book" />
                    </div>
                    <div className="stars">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                    </div>
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное пособие для програ...</div>
                    <div className="author">Адитья Бхаргава, Патрик Нимейер, 2019</div>
                    <div className="button booked">
                        <button type='button'>Забронирована</button>
                    </div>
                </div>
                <div className="bookIcon">
                    <div className="imageOfBook">
                        <img src={notImage} alt="book" />
                    </div>
                    <div className="stars">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                    </div>
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное пособие для програ...</div>
                    <div className="author">Адитья Бхаргава, 2019</div>
                    <Link to='/book'>
                        <div className="button">
                            <button type='button'>Забронировать</button>
                        </div>
                    </Link>
                </div>
                <div className="bookIcon">
                    <div className="imageOfBook">
                        <img src={image} alt="book" />
                    </div>
                    <div className="stars">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                    </div>
                    <div className="nameOfBook">Грокаем алгоритмы. </div>
                    <div className="author">Адитья Бхаргава, Патрик Нимейер, 2019</div>
                    <Link to='/book'>
                        <div className="button">
                            <button type='button'>Забронировать</button>
                        </div>
                    </Link>
                </div>
                <div className="bookIcon">
                    <div className="imageOfBook">
                        <img src={image} alt="book" />
                    </div>
                    <div className="stars">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                    </div>
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное пособие для програ...</div>
                    <div className="author">Адитья Бхаргава, Патрик Нимейер, 2019</div>
                    <Link to='/book'>
                        <div className="button">
                            <button type='button'>Забронировать</button>
                        </div>
                    </Link>
                </div>
                <div className="bookIcon">
                    <div className="imageOfBook">
                        <img src={image} alt="book" />
                    </div>
                    <div className="stars">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                    </div>
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное пособие для програ...</div>
                    <div className="author">Адитья Бхаргава, 2019</div>
                    <Link to='/book'>
                        <div className="button">
                            <button type='button'>Забронировать</button>
                        </div>
                    </Link>
                </div>
                <div className="bookIcon">
                    <div className="imageOfBook">
                        <img src={notImage} alt="book" />
                    </div>
                    <div className="stars">ещё нет оценок</div>
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное </div>
                    <div className="author">Адитья Бхаргава, Патрик Нимейер, 2019</div>
                    <div className="button closed">
                        <button type='button'>Занята до 23.04</button>
                    </div>
                </div>
                <div className="bookIcon">
                    <div className="imageOfBook">
                        <img src={image} alt="book" />
                    </div>
                    <div className="stars">ещё нет оценок</div>
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное пособие для програ...</div>
                    <div className="author">Адитья Бхаргава, 2019</div>
                    <Link to='/book'>
                        <div className="button">
                            <button type='button'>Забронировать</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
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
