import React, { useState, useEffect } from "react"
import Head from 'next/head'
//import { Swiper, SwiperSlide } from "swiper/react"
//import { Pagination, Navigation } from "swiper"
//import "swiper/css"

import Footer from "../components/Footer"
import HotelItem from "../components/HotelItem"
import LeftSidebar from "../components/LeftSidebar"
import MenuMobile from "../components/MenuMobile"

export default function Index (props) {

    const [visibleMenu, setVisibleMenu] = useState(0)
/*    const [isDesktop, setIsDesktop] = useState(0)

    useEffect(() => {
        setIsDesktop(window.screen.width > 1250)

        window.addEventListener('resize', () => {
            setIsDesktop(window.screen.width > 1250)
        })
        console.log(isDesktop)
    }, [])
*/

    console.log(props)

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

                        <HotelItem popularHotels = {props.popularHotels.data} />

                        <div className = "between-blocks"></div>
                        
                        <HotelItem popularHotels = {props.popularHotels.data} />
                    </main>

                    <Footer />
                </div>
            </>
        )
    }

export async function getStaticProps(context) {

    // Популярные отели

    const getHotels = await fetch('https://maot-api.bokn.ru/api/hotels/top')
    const popularHotels = await getHotels.json()

    // Популярные направления

    const getWays = await fetch('https://maot-api.bokn.ru/api/regions/top')
    const popularWays = await getWays.json()
    
    // Отзывы

    //const getReviews = await fetch('https://maot-api.bokn.ru/api/load?id=6713')
    //let reviews = await getReviews.json()
    //    reviews = reviews.data.reviews

    return {
        props: {
            popularHotels,
            popularWays,
            //reviews
        },
    }
}
    