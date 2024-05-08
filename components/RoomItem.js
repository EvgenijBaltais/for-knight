import { useState } from 'react'

const RoomItem = ({data}) => {

	const [selected, changeSelected] = useState(0)

    function returnDate (date) {
		let months = ['янв', 'фев', 'март', 'апр', 'мая', 'июн', 'июл', 'авг', 'сент', 'окт', 'нояб', 'дек']
        return date.slice(-2) + ' ' + (months[(parseInt(date.slice(5, 7))) - 1])
    }

    function returnDayName (date) {

		let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			d = new Date(date),
			n = d.getDay()

        return days[n]
    }

	function returnNights (start_date, end_date) {
		let date1 = new Date(start_date)
		let date2 = new Date(end_date)

		return (date2 - date1) / (60 * 60 * 24 * 1000)
	}

    function nightsRightText (nights) {

        let text = nights + ' ночей'

        nights == 1 || nights.length > 1 && nights.slice(-1) == 1 ? text = nights + ' ночь' : ''
        nights == 2 || nights == 3 || nights == 4 ? text = nights + ' ночи' : ''
        return text
    }

	    return !selected ? (
			<div className="hotel-room-item hotel-el">
				<div className="hotel-room-item-left">
				{data.checkin_date && data.checkout_date ?
					<p className="hotel-room-dates">{returnDate(data.checkin_date) + ` (${returnDayName(data.checkin_date)})`} - {returnDate(data.checkout_date) + ` (${returnDayName(data.checkout_date)})`}</p>
					: ''
				}

					<p className="hotel-room-title">{data.room_category || ''}</p>
					<p className="hotel-room-text">{data.food_type_name || ''}. {data.room_description || ''}</p>
					<p className="hotel-room-flight">Без перелета</p>
				</div>
				<div className="hotel-room-item-right">
					{parseInt(data.price) ?
						<div className="hotel-room-fullprice"><del>{parseInt(data.price).toLocaleString()} ₽</del></div> : ''
					}
					{parseInt(data.total_price) ?
						<div className="hotel-room-price">{parseInt(data.total_price).toLocaleString()} ₽</div> : ''
					}
					{data.checkin_date && data.checkout_date ?
						<div className="hotel-room-nights">за {nightsRightText(returnNights(data.checkin_date, data.checkout_date))}</div>
						: ''
					}
					<div className="hotel-room-bronbtn" onClick = {() => changeSelected(selected => !selected)}>Зафиксировать цену</div>
				</div>
			</div>
	    )
		:
		(
            <div className = "hotel-room-item">
                <div className="hotel-el hotel-el-selected">
                    <p className="room-selected-choose">Вы выбрали</p>
                    {data.checkin_date && data.checkout_date ?
                        <p className="room-selected-dates">{returnDate(data.checkin_date) + ` (${returnDayName(data.checkin_date)})`} - {returnDate(data.checkout_date) + ` (${returnDayName(data.checkout_date)})`}</p>
                        : ''
                    }
                    <p className="room-selected-title">{data.room_category || ''}</p>
                    <p className="room-selected-text">{data.food_type_name || ''}. {data.room_description || ''}</p>
                    <p className="room-selected-flight">Без перелета</p>
                    <div className="room-selected-hr"></div>
                    {data.checkin_date && data.checkout_date ?
                        <p className="room-selected-nights">за {nightsRightText(returnNights(data.checkin_date, data.checkout_date))}</p>
                        : ''
                    }
                    <p className="room-selected-price">{data.total_price ? parseInt(data.total_price).toLocaleString() + ' ₽' : ''}</p>
                    <p className="room-selected-call">Менеджер свяжется с Вами в ближайшее время</p>
                </div>
            </div>
	    )
}

export default RoomItem