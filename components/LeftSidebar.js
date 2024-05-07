
import Image from 'next/image'
import Logo from '/public/images/logo-maot.svg'

const LeftSidebar = (props) => {

	    return (
            <div className = {`left-sidebar${[props.visibleMenu == 1 ? " active" : '']}`}>
                <div className = "menu-nav">
                    <div className="open-close"></div>
                    <a href = "/">
                        <Image className="main-logo" src={Logo} alt="Компания Магазин отдыха" priority={true} />
                    </a>
                    {props.manager_fio && props.manager_fio.length ?
                    <>
                        <p className="manager-text grey-text margin-bottom-10">Ваш персональный менеджер:</p>
                        <p className="manager-name dark-grey-text margin-bottom-10">{props.manager_fio}</p>
                    </> : ''
                    }
                    {props.work_phone && props.work_phone.length ?
                        <p className="margin-bottom-10">
                            <a href = {`tel:${props.work_phone}`} className="manager-phone grey-text" placeholder={props.work_phone}>{props.work_phone}</a>
                        </p> : ''
                    }
                    {props.manager_email && props.manager_email.length ?
                        <p className="margin-bottom-40">
                            <a href = {`mailto:${props.manager_email}`} className="manager-email grey-text">{props.manager_email}</a>
                        </p> : ''
                    }
                    <div className="aks-manager-btn">
                        Задать вопрос менеджеру
                    </div>
                </div>
            </div>
	    )
}

export default LeftSidebar