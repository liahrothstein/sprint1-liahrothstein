import {Link} from 'react-router-dom';

import './terms-of-use.css';

import logo from '../main/logo-clevertec.png';
import avatar from '../main/avatar.png';
import facebook from '../main/social1.png';
import instagram from '../main/social2.png';
import vk from '../main/social3.png';
import linkedin from '../main/social4.png';

const divStyle = {
    color: '#363636'
};
const hrColor = {
    background: '#363636'
};
const activeButton = {
    color: '#F83600'
};

export const TermsOfUse = () => (
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
                <div className="active" style={divStyle}>
                    <Link to='/'>Витрина книг</Link>
                </div>
                <hr style={hrColor} />
                <div className="categories">
                    <div className="allBooks" style={divStyle}>Все книги</div>
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
            <div className="tab2" style={activeButton}>
                <Link to='/terms'>Правила пользования</Link>
            </div>
            <div className="tab3">
                <Link to='/offer'>Договор оферты</Link>
            </div>
        </div>
        <div className="terms">
            <div className="termsHeader">Правила пользования</div>
            <div className="paragraph">1. Идейные соображения высшего порядка, а также высокое качество позиционных исследований представляет собой интересный эксперимент проверки экспериментов, поражающих по своей масштабности и грандиозности.</div>
            <div className="mainText first">1.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого участника как способного принимать собственные решения касаемо инновационных методов управления процессами. </div>
            <div className="mainText first">1.2. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме. </div>
            <div className="mainText first">1.3. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. </div>
            <div className="mainText first">1.4. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объединены в целые кластеры себе подобных. </div>
            <div className="paragraph">2. С учётом сложившейся международной обстановки, консультация с широким активом предоставляет широкие возможности для приоритизации разума над эмоциями.</div>
            <div className="mainText first">2.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого участника как способного принимать собственные решения касаемо инновационных методов управления процессами. </div>
            <div className="mainText second">2.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме. </div>
            <div className="mainText second">2.1.2. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. </div>
            <div className="mainText first">2.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объединены в целые кластеры себе подобных. </div>
            <div className="paragraph">3. Принимая во внимание показатели успешности, укрепление и развитие внутренней структуры требует от нас анализа приоритизации разума над эмоциями.</div>
            <div className="mainText first">3.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого участника как способного принимать собственные решения касаемо инновационных методов управления процессами. </div>
            <div className="mainText second">3.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме. </div>
            <div className="mainText second">3.1.2. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. </div>
            <div className="mainText first">3.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объединены в целые кластеры себе подобных. </div>
            <div className="mainText first">3.3. Не следует, однако, забывать, что экономическая повестка сегодняшнего дня требует анализа анализа существующих паттернов поведения. </div>
            <div className="mainText second">3.3.1. А ещё представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть функционально разнесены на независимые элементы. </div>
            <div className="mainText third">3.3.1.1. Стремящиеся вытеснить традиционное производство, нанотехнологии могут быть объявлены нарушающими общечеловеческие нормы этики и морали. </div>
            <div className="mainText third">3.3.1.2. Прежде всего, разбавленное изрядной долей эмпатии, рациональное мышление однозначно фиксирует необходимость новых предложений. Являясь всего лишь частью общей картины, независимые государства представлены в исключительно положительном свете.</div>
            <div className="mainText first">3.4. Повседневная практика показывает, что убеждённость некоторых оппонентов требует от нас анализа распределения внутренних резервов и ресурсов.</div>
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
