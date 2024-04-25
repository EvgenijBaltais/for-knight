//import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Logo from '/public/images/logo-maot.svg'

export default function Index (props){

    /*useEffect(() => {

        document.querySelector('.wrapper').classList.add('main-page')
        document.querySelector('.header').classList.remove('fullsize-nav')

        return () => {
            document.querySelector('.wrapper').classList.remove('main-page')
        }
    }, [])*/

        return (
            <>
                <Head>
                    <title>Бронирование</title>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                </Head>
                <div className = "wrapper">
                    <div className = "left-sidebar">
                        <Image className="main-logo" src={Logo} alt="Компания Магазин отдыха" />

                        <p className="manager-text grey-text margin-bottom-10">Ваш персональный менеджер:</p>
                        <p className="manager-name dark-grey-text margin-bottom-10">Денис Воробьев</p>
                        <p className="margin-bottom-10">
                            <a href = "+79999999999" className="manager-phone grey-text">+7 999 999-99-99</a>
                        </p>
                        <p className="margin-bottom-40">
                            <a href = "mailto:denismailox@mail.ru" className="manager-email grey-text">denismailox@mail.ru</a>
                        </p>
                        <div className="aks-manager-btn">
                            Задать вопрос менеджеру
                        </div>
                    </div>
                    <main className = "main">
                        <div className = "hotel-item">
                            <div className="hotel-info hotel-el">
                                <div className="hotel-info-pic"></div>
                                <div className="hotel-info-content">
                                    <h2 className="hotel-content-h">Les Art Resort</h2>
                                    <p className="hotel-content-text">
                                        Отель «LES Art Resort» 4* расположен в экологически чистой лесной зоне западного Подмосковья. 
                                        Загородный отдых со SPA комплексом, тремя бассейнами, ресторанами и развлечениями на территории
                                         в 20 гектаров будет не только развлекательным, но и полезным
                                    </p>
                                    <a className="hotel-content-link">Полное описание</a>
                                </div>
                            </div>
                            <div className="hotel-room-item hotel-el">
                                <div className="hotel-room-item-left">
                                    <p className="hotel-room-dates">26 июля (ПТ) - 03 августа (Сб)</p>
                                    <p className="hotel-room-title">Стандарт 2-комнатный</p>
                                    <p className="hotel-room-text">2-комнатный полулюкс. Номер рассчитан на 4-местное размещение</p>
                                    <p className="hotel-room-flight">Без перелета</p>
                                </div>
                                <div className="hotel-room-item-right">
                                    <div className="hotel-room-fullprice"><del>138 500 ₽</del></div>
                                    <div className="hotel-room-price">105 000 ₽</div>
                                    <div className="hotel-room-nights">за 8 ночей</div>
                                    <div className="hotel-room-bronbtn">Зафиксировать цену</div>
                                </div>
                            </div>
                            <div className="hotel-room-item hotel-el">
                                <div className="hotel-room-item-left">
                                    <p className="hotel-room-dates">26 июля (ПТ) - 03 августа (Сб)</p>
                                    <p className="hotel-room-title">Стандарт 2-комнатный</p>
                                    <p className="hotel-room-text">2-комнатный полулюкс. Номер рассчитан на 4-местное размещение</p>
                                    <p className="hotel-room-flight">Без перелета</p>
                                </div>
                                <div className="hotel-room-item-right">
                                    <div className="hotel-room-fullprice"><del>138 500 ₽</del></div>
                                    <div className="hotel-room-price">105 000 ₽</div>
                                    <div className="hotel-room-nights">за 8 ночей</div>
                                    <div className="hotel-room-bronbtn">Зафиксировать цену</div>
                                </div>
                            </div>
                            <div className="hotel-room-item hotel-el">
                                <div className="hotel-room-item-left">
                                    <p className="hotel-room-dates">26 июля (ПТ) - 03 августа (Сб)</p>
                                    <p className="hotel-room-title">Стандарт 2-комнатный</p>
                                    <p className="hotel-room-text">2-комнатный полулюкс. Номер рассчитан на 4-местное размещение</p>
                                    <p className="hotel-room-flight">Без перелета</p>
                                </div>
                                <div className="hotel-room-item-right">
                                    <div className="hotel-room-fullprice"><del>138 500 ₽</del></div>
                                    <div className="hotel-room-price">105 000 ₽</div>
                                    <div className="hotel-room-nights">за 8 ночей</div>
                                    <div className="hotel-room-bronbtn">Зафиксировать цену</div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="footer">
                        <div className="footer-1">
                            <div className="footer-1-top">
                                <p className="footer-text bold-text">Мы работаем</p>
                                <p className="footer-text">по будням с 9:00 до 21:00</p>
                                <p className="footer-text">по выходным с 11:00 до 18:00</p>
                            </div>
                            <div>
                                <p className="footer-text bold-text">Адрес</p>
                                <p className="footer-text">г. Москва, ул. Бауманская д. 6с2. Бизнес-центр Виктория Плаза</p>
                            </div>
                        </div>
                        <div className="footer-2">
                            <p className="footer-text bold-text">Наши офисы</p>
                            <p className="footer-text">Москва</p>
                            <p className="footer-text">Санкт-Петербург</p>
                            <p className="footer-text">Ростов-на-Дону</p>
                            <p className="footer-text">Краснодар</p>
                            <p className="footer-text">Тула</p>
                        </div>
                        <div className="footer-3">
                            <p className="footer-text bold-text">Способы оплаты</p>
                        </div>
                    </footer>
                </div>
            </>
        )
    }