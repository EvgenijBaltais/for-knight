import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
//import { Swiper, SwiperSlide } from "swiper/react"
//import { Pagination, Navigation } from "swiper"
//import "swiper/css"

import Footer from "../components/Footer"
import HotelItem from "../components/HotelItem"
import LeftSidebar from "../components/LeftSidebar"
import MenuMobile from "../components/MenuMobile"

export default function Index (props) {

    const router = useRouter()
    const { query } = useRouter()
    const [visibleMenu, setVisibleMenu] = useState(0)
    const hotels = [1,2,3]

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

        //console.log(JSON.stringify('hash=' + query.hash))

            /*fetch('https://crmvi.ru/knight/api/selection/get', {
                method: 'POST',
                //mode: 'no-cors',
                body: JSON.stringify({'hash': query.hash}),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'c
                },
            })
            .then(response => response.json())
            .then(data => {

                console.log(data)

                //if (result.data.length > 0) {


                    //return false
                //}
            })*/
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

        return (
            <>
                <Head>
                    <title>Бронирование</title>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                </Head>
                <div className = "wrapper">

                    <LeftSidebar visibleMenu = {visibleMenu} />
                    <MenuMobile visibleMenu = {visibleMenu} setVisibleMenu = {setVisibleMenu} />
                    
                    <main className = "main">

                    {hotels.map((item, index) => {
                        return (
                            <>
                                <HotelItem key = {index} />
                                {index == hotels.length - 1 ? '' : <div className = "between-blocks"></div>}
                            </>
                        )
                    })}
                    
                    </main>
                    <Footer />
                </div>
            </>
        )
    }