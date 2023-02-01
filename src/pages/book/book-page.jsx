import { Link } from "react-router-dom";

import './book-page.css';
import logo from '../main/logo-clevertec.png';
import avatar from '../main/avatar.png';
import facebook from '../main/social1.png';
import instagram from '../main/social2.png';
import vk from '../main/social3.png';
import linkedin from '../main/social4.png';
import commentator from './commentator.png';
import image from './image.png';
import star from '../main/star.png';
import notStar from '../main/notStar.png';

export const BookPage = () => (
    <section className='book-page'>
        <div className="header">
            <Link to='/'>
                <div className="logo">
                    <div className="logoClevertec"><img src={logo} alt="logo" /></div>
                    <div className="logoName">Cleverland</div>
                </div>
            </Link>
            <div className="nameOfPage">Библиотека</div>
            <div className="person">
                <div className="hiName">
                    Привет, Иван!
                </div>
                <div className="avatar"><img src={avatar} alt="avatar" /></div>
            </div>
        </div>
        <div className="bookMiniList">Бизнес книги  /  Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</div>
        <div className="main">
            <div className="image"><img src={image} alt="img" /></div>
            <div className="mainContent">
                <div className="header">Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</div>
                <div className="author">Адитья Бхаргава, 2019</div>
                <div className="button"><button type="button">Забронировать</button></div>
                <div className="aboutBook">О книге</div>
                <div className="aboutText">
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?<br /><br />
                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.
                </div>
            </div>
        </div>
        <div className="rating">
            <div className="header">Рейтинг</div>
            <hr />
            <div className="starsWithNumbers">
                <div className="stars">
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={notStar} alt="notStar" /></div>
                </div>
                <div className="number">4.3</div>
            </div>
        </div>
        <div className="detailedInformation">
            <div className="header">Подробная информация</div>
            <hr />
            <div className="main">
                <div className="column1">
                    <div className="namesOfProperty">
                        <div className="nameOfProperty">Издательство</div>
                        <div className="nameOfProperty">Год издания</div>
                        <div className="nameOfProperty">Страниц</div>
                        <div className="nameOfProperty">Переплёт</div>
                        <div className="nameOfProperty">Формат</div>
                    </div>
                    <div className="properties">
                        <div className="property">Питер</div>
                        <div className="property">2019</div>
                        <div className="property">288</div>
                        <div className="property">Мягкая обложка</div>
                        <div className="property">70х100</div>
                    </div>
                </div>
                <div className="column2">
                    <div className="namesOfProperty">
                        <div className="nameOfProperty">Жанр</div>
                        <div className="nameOfProperty">Вес</div>
                        <div className="nameOfProperty">ISBN</div>
                        <div className="nameOfProperty">Изготовитель</div>
                    </div>
                    <div className="properties">
                        <div className="property">Компьютерная литература</div>
                        <div className="property">370 г</div>
                        <div className="property">978-5-4461-0923-4</div>
                        <div className="property">ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="reviews">
            <div className="headerAndNumber">
                <div className="header">Отзывы</div>
                <div className="number">2</div>
            </div>
            <hr />
            <div className="review">
                <div className="container">
                    <div className="commentator"><img src={commentator} alt="commentator" /></div>
                    <div className="nameOfPerson">Иван Иванов</div>
                    <div className="date">5 января 2019</div>
                </div>
                <div className="stars">
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={notStar} alt="notStar" /></div>
                </div>
            </div>
            <div className="review secondReview">
                <div className="container">
                    <div className="commentator"><img src={commentator} alt="commentator" /></div>
                    <div className="nameOfPerson">Николай Качков</div>
                    <div className="date">20 июня 2018</div>
                </div>
                <div className="stars">
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={notStar} alt="notStar" /></div>
                </div>
                <div className="comment">
                Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
                </div>
            </div>
            <div className="review">
                <div className="container">
                    <div className="commentator"><img src={commentator} alt="commentator" /></div>
                    <div className="nameOfPerson">Екатерина Беляева</div>
                    <div className="date">18 февраля 2018</div>
                </div>
                <div className="stars">
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={star} alt="star" /></div>
                    <div className="star"><img src={notStar} alt="notStar" /></div>
                </div>
            </div>
        </div>
        <div className="rateTheBook"><button type="button">оценить книгу</button></div>
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
