

const RoomSelected = (props) => {

	    return (
            <div className = "hotel-item">
                <div className="hotel-el hotel-el-selected">
                    <p className="room-selected-choose">Вы выбрали</p>
                    <p className="room-selected-dates">26 июля (Пт) - 03 авг (Сб)</p>
                    <p className="room-selected-title">Стандарт 2-комнатный</p>
                    <p className="room-selected-text">2-комнатный полулюкс. Номер рассчитан на 4-местное размещение</p>
                    <p className="room-selected-flight">Без перелета</p>
                    <div className="room-selected-hr"></div>
                    <p className="room-selected-nights">за 8 ночей</p>
                    <p className="room-selected-price">105 000 ₽</p>
                    <p className="room-selected-call">Менеджер свяжется с Вами в ближайшее время</p>
                </div>
            </div>
	    )
}

export default RoomSelected