import { useState } from 'react'
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'
import RoomItem from "./RoomItem"
import 'swiper/css'

const pics = ['https://cdn.worldota.net/t/x500/extranet/52/59/5259e6b26c2aeee701013dce2771286ab598e8be.jpeg',
                'https://cdn.worldota.net/t/x500/extranet/8c/08/8c08e9d975e3214396824b34f1ba9f264e30d342.jpeg',
                'https://cdn.worldota.net/t/x500/extranet/3b/c0/3bc02013d55d55abe5d210906d0b818cca54b1da.jpeg',
                'https://cdn.worldota.net/t/x500/extranet/2b/7b/2b7b47157f81257c1f1dde353946662262f967e1.jpeg'
]

function addBackgroundImage (slider) {
    slider.slides[slider.activeIndex].style.backgroundImage = `url('${slider.slides[slider.activeIndex].getAttribute('data-pic')}')`
}

const HotelItem = (props) => {

    const [view, changeView] = useState(0)
    const [size, changeSize] = useState(0)

	    return (
            <div className = "hotel-item">
                <div className="hotel-info hotel-el">
                    <div className={`hotel-info-pic${view ? ` active` : ""}`}>

                        {pics ? 
                            <Swiper
                                onSlideChange = {slider => addBackgroundImage(slider)}
                                slidesPerView={1}
                                spaceBetween={10}
                                loop={true}
                                modules={[Navigation, Pagination]}
                                navigation = {true}
                                pagination={{ clickable: true, bulletClass: `pagination-bullet`}}
                                className='swiper-pics'
                            >
                                {pics.map((item, index) => {
                                    return (
                                        <SwiperSlide
                                            className="select-results__item-image"
                                            key = {index}
                                            data-pic = {item}
                                            style = {index == 0 ? {backgroundImage: `url(${item})`} : {}}
                                        ></SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        :''}

                        <div className = "hotel-arrow-increase" onClick = {() => changeView(view => !view)}></div>
                    </div>
                    <div className="hotel-info-content">
                        <h2 className="hotel-content-h">Les Art Resort</h2>
                        <p className={`hotel-content-text${size ? ` active` : ""}`}>
                            Отель «LES Art Resort» 4* расположен в экологически чистой лесной зоне западного Подмосковья. 
                            Загородный отдых со SPA комплексом, тремя бассейнами, ресторанами и развлечениями на территории
                             в 20 гектаров будет не только развлекательным, но и полезным
                        </p>
                        <a className="hotel-content-link" onClick = {() => changeSize(size => !size)}>{size ? "Скрыть описание" : "Полное описание"}</a>
                    </div>
                </div>

                <RoomItem />

                <RoomItem />
                <RoomItem />
                <RoomItem />


            </div>
	    )
}

export default HotelItem