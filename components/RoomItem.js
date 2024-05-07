const RoomItem = ({selected, changeSelected, data}) => {

    const months = ['янв', 'фев', 'март', 'апр', 'мая', 'июн', 'июл', 'авг', 'сент', 'окт', 'нояб', 'дек']

    function returnDate (date) {
        return date.slice(-2) + ' ' + (months[(parseInt(date.slice(5, 7))) - 1])
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

	    return (
			<div className="hotel-room-item hotel-el">
				<div className="hotel-room-item-left">
				{data.checkin_date && data.checkout_date ?
					<p className="hotel-room-dates">{returnDate(data.checkin_date)} - {returnDate(data.checkout_date)}</p>
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
}

export default RoomItem