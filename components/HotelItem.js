import { useState } from 'react'
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'
import RoomItem from "./RoomItem"
import RoomSelected from "./RoomSelected"
import 'swiper/css'

const HotelItem = (props) => {

    const [view, changeView] = useState(0)
    const [size, changeSize] = useState(0)
    const [selected, changeSelected] = useState(0)

	    return (
            <div className = "hotel-item">
                <div className="hotel-info hotel-el">
                    <div className={`hotel-info-pic${view ? ` active` : ""}`}>
                        {props.data.images.length ? 
                            <Swiper
                                onSlideChange = {slider => addBackgroundImage(slider)}
                                slidesPerView={1}
                                spaceBetween={10}
                                loop={props.data.images.length > 1}
                                modules={[Navigation, Pagination]}
                                navigation = {true}
                                pagination={{ clickable: true, bulletClass: `pagination-bullet`}}
                                className='swiper-pics'
                            >
                                {props.data.images.map((item, index) => {
                                    return (
                                        <SwiperSlide
                                            className="select-results__item-image"
                                            key = {index}
                                            data-pic = {item.url}
                                            style = {index == 0 ? {backgroundImage: `url(${item.url})`} : {}}
                                        ></SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        :''}
                        {props.data.images.length ? <div className = "hotel-arrow-increase" onClick = {() => changeView(view => !view)}></div> : ''}
                    </div>
                    <div className="hotel-info-content">
                        <h2 className="hotel-content-h">{props.data.hotel_name}</h2>
                        <p className={`hotel-content-text${size ? ` active` : ""}`}>
                            {props.data.description}
                        </p>
                        <a className="hotel-content-link" onClick = {() => changeSize(size => !size)}>{size ? "Скрыть описание" : "Полное описание"}</a>
                    </div>
                </div>

                {!selected ?            
                    props.data.rooms.map((item, index) => (
                        <RoomItem key={index} data = {item} selected = {selected} changeSelected = {changeSelected} />
                    )) : ''
                }

                {selected ?            
                    <RoomSelected /> : ""
                }

            </div>
	    )
}

export default HotelItem