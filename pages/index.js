import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'

import Footer from "../components/Footer"
import HotelItem from "../components/HotelItem"
import LeftSidebar from "../components/LeftSidebar"
import MenuMobile from "../components/MenuMobile"

export default function Index (props) {

    const router = useRouter()
    const { query } = useRouter()
    const [visibleMenu, setVisibleMenu] = useState(0)
    const [hotels, getHotels] = useState(0)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        // Закрыть меню при нажатии на белый фон на телефоне

        function menuStatus () {
            console.log(window.screen.width)
            if (window.screen.width > 1250) return false

            !visibleMenu ? body_unlock() : body_lock()
            event.target.classList.contains('menu-nav') ? setVisibleMenu(!visibleMenu) : ''
        }

        window.addEventListener('click', menuStatus)

        return () => {
            window.removeEventListener('click', menuStatus)
        }
    }, [visibleMenu])

    useEffect(() => {

        if (!router.isReady) return
        if (!query.hash) return

            fetch('https://bron.gostinitsa-nikonovka-msk.ru?hash=' + query.hash)
            .then(response => response.json())
            .then(data => {

                getHotels(data)

            })
    }, [query])


    function body_lock() {

        let body = document.body;
        if (!body.classList.contains('scroll-locked')) {
            let bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            body.classList.add('scroll-locked');
            body.style.top = "-" + bodyScrollTop + "px";
            body.setAttribute("data-popup-scrolltop", bodyScrollTop)
        }
    }
    
    function body_unlock() {
    
        let body = document.body;
        if (body.classList.contains('scroll-locked')) {
            let bodyScrollTop = document.body.getAttribute("data-popup-scrolltop");
            body.classList.remove('scroll-locked');
            body.style.top = "";
            body.removeAttribute("data-popup-scrolltop")
            window.scrollTo(0, bodyScrollTop)
        }
    }

    if (!router.isReady) {
        return <></>
    }

    return !query.hash ? (
        <>
            {isClient ? <div className="not-enough-data">
                <span>{'Недостаточно данных'}</span>
            </div> : ''
            }
        </>
    )
    :
    (
        <>
            <Head>
                <title>Бронирование</title>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            </Head>

            {!hotels ?
                <>
                    <img src = "/images/148.gif" className = "no-result-image" />
                </> : ''
            }

            {hotels && hotels.length ? 
                <div className = "wrapper">

                    <LeftSidebar visibleMenu = {visibleMenu} manager_fio = {hotels[0].manager_fio} manager_phone = {hotels[0].manager_phone} manager_email = {hotels[0].manager_email} />
                    <MenuMobile visibleMenu = {visibleMenu} setVisibleMenu = {setVisibleMenu} manager_fio = {hotels[0].manager_fio} manager_phone = {hotels[0].manager_phone} manager_email = {hotels[0].manager_email} />
                    
                    <main className = "main">

                    {hotels.map((item, index) => {
                        return (
                            <div key = {index}>
                                <HotelItem data = {item} />
                                {index == hotels.length - 1 ? '' : <div className = "between-blocks"></div>}
                            </div>
                        )
                    })}
                    
                    </main>
                    <Footer />
                </div>
                : ''
            }

            {hotels && !hotels.length ? 
                <>
                    <div className="not-enough-data">
                        <span>Нет данных</span>
                    </div>
                </> : ''
            }
        </>
    )
}