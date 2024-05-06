
import Image from 'next/image'
import Logo from '/public/images/logo-maot.svg'

const LeftSidebar = (props) => {

	    return (
            <div className = {`left-sidebar${[props.visibleMenu == 1 ? " active" : '']}`}>
                <div className = "menu-nav">
                    <div className="open-close"></div>
                    <a href = "/">
                        <Image className="main-logo" src={Logo} alt="Компания Магазин отдыха" />
                    </a>
                    <p className="manager-text grey-text margin-bottom-10">Ваш персональный менеджер:</p>
                    <p className="manager-name dark-grey-text margin-bottom-10">Денис Воробьев</p>
                    <p className="margin-bottom-10">
                        <a href = "tel:+79999999999" className="manager-phone grey-text" placeholder="+7 999 999-99-99">+7 999 999-99-99</a>
                    </p>
                    <p className="margin-bottom-40">
                        <a href = "mailto:denismailbox@mail.ru" className="manager-email grey-text">denismailbox@mail.ru</a>
                    </p>
                    <div className="aks-manager-btn">
                        Задать вопрос менеджеру
                    </div>
                </div>
            </div>
	    )
}

export default LeftSidebar