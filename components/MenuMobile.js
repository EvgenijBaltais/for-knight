
import Image from 'next/image'
import Smalllogo from '/public/images/small-logo.png'

const MenuMobile = (props) => {

	    return (

                <div className = "menu-mobile">
                    <a href = "/">
                        <Image className="main-logo-small" src={Smalllogo} alt="Компания Магазин отдыха" />
                    </a>
                    <div className="menu-mobile-text">
                        <p className = "mobile-manager-name-info">Ваш персональный менеджер:</p>
                        <p className = "mobile-manager-name">Денис Воробьев</p>
                    </div>
                    <div className="aks-manager-btn-m">
                        Задать вопрос менеджеру
                    </div>
                    <div className={`menu-pic${[props.visibleMenu == 1 ? " active" : '']}`} onClick = {() => props.setVisibleMenu(!props.visibleMenu)}></div>
                </div>
	    )
}

export default MenuMobile