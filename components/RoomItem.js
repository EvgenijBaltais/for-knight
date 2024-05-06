const RoomItem = ({selected, changeSelected}) => {

	    return (
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
					<div className="hotel-room-bronbtn" onClick = {() => changeSelected(selected => !selected)}>Зафиксировать цену</div>
				</div>
			</div>
	    )
}

export default RoomItem