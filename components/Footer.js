import Image from 'next/image'
import Payments from '/public/images/pay-1.png'

const Footer = () => {

    return (
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
                <Image src={Payments} alt="Платежные методы" className="pay-pics" priority={false} />
            </div>
        </footer>
    )
}

export default Footer