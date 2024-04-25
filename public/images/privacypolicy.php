<script src='https://www.google.com/recaptcha/api.js'></script>
<link rel="stylesheet" href="/css/style-m.css">
<?php
$this->title = "Контакты";

$regionHotelService = array('street' => 'Москва г, Красносельская Нижн. ул,',
					'office' => 'дом 35, строение 64, этаж 8 ком В',
					'phone' => '8 (495) 215 - 54 - 25',
					'email' => 'info@region-hotel-service.ru',
					'metro' => '',
					'name' => 'ООО «Нанта Экспресс»',
					'oferta' => '<a href = "/files/privacy_policy.docx" target = "_blank">Политика конфиденциальности</a>',
					'pic' => '<img src="img/viktoriya_plaza.jpg" alt="Бизнес-центр «Виктория-плаза»" class = "victoriya-plaza">',
					'requisites' => '
					<div class = "requisites-m-item">
						<p class = "requisites-m-title"><b>Реквизиты:</b></p>
						<p class = "padding-bottom-5px"><b>Название организации:</b> ООО "НАНТА ЭКСПРЕСС"</p>
						<p class = "padding-bottom-5px"><b>Полное название организации:</b> ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «НАНТА ЭКСПРЕСС»</p>
						<p class = "padding-bottom-5px">Генеральный директор с 15.03.2024 г. Семеренко Юлия Викторовна</p>
						<p class = "padding-bottom-5px"><b>Юридический адрес:</b> 129337, г. Москва, вн.тер.г. Муниципальный округ Ярославский, ул. Красная Сосна, д. 3, помещ. 91К</p>
						<p class = "padding-bottom-5px"><b>Фактический адрес:</b> 129337, г. Москва, вн.тер.г. Муниципальный округ Ярославский, ул. Красная Сосна, д. 3, помещ. 91К</p>
						<p class = "padding-bottom-5px"><b>ИНН/КПП:</b> 7727379923/771601001</p>
						<p class = "padding-bottom-5px"><b>Банк:</b> АО «АЛЬФА-БАНК»</p>
						<p class = "padding-bottom-5px"><b>Расчетный счет:</b> 40702810101300043674</p>
						<p class = "padding-bottom-5px"><b>БИК:</b> 044525593</p>
						<p class = "padding-bottom-5px"><b>Корреспондирующий счет:</b> 30101810200000000593</p>
						<p class = "padding-bottom-5px"><b>ОГРН:</b> 1187746634240</p>
						<p class = "padding-bottom-5px"><b>ОКВЭД:</b> 79.11</p>
					</div>',
					'closing' => '');

$actualData = array();

$phones_amount = "";

$host = $regionHotelService;

	$actualData = $regionHotelService;
    $phone1 = '8 (901) 634 - 54 - 72';
    $phone2 = '8 (495) 662 - 49 - 28';
    $phone_link1 = '+79016345472';
    $phone_link2 = '+74956624928';
    $addrMSK = '129337, г. Москва, вн.тер.г. Муниципальный округ Ярославский, ул. Красная Сосна, д. 3, помещ. 91К';
    $urAddrMSK = '129337, г. Москва, вн.тер.г. Муниципальный округ Ярославский, ул. Красная Сосна, д. 3, помещ. 91К';


	// Что-то типа капчи, чтобы не падал спам
	$captchastring = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
	$captchastring = substr(str_shuffle($captchastring), 0, 6);
	setcookie("code", $captchastring);

$contact_form = '
		<form id="contact_form" action="contact" method="post">
			<div class="booking-form-i">
				<div class="input">
					<input type="text" placeholder="Ваше имя" name="name" value="" class="customer-name"/>
				</div>
				<span class="validate-message">
					Заполните это поле!
					<span class="validate-message-decorate"></span>
				</span>
			</div>
			<div class="booking-form-i">
				<div class="input">
					<input type="text" placeholder="Название компании" name="company_name" value="" class="customer-company-name"/>
				</div>
			</div>
			<div class="booking-form-i">
				<div class="input">
					<input type="text" placeholder="Email" name="email" value="" class="customer-email"/>
				</div>
				<span class="validate-message">
					Заполните это поле!
					<span class="validate-message-decorate"></span>
				</span>
			</div>
			<div class="booking-form-i">
				<div class="input">
					<input placeholder="Телефон" type="text" name="phone" value="" class="customer-phone"/>
				</div>
				<span class="validate-message">
					Заполните это поле!
					<span class="validate-message-decorate"></span>
				</span>
			</div>
			<div class="booking-form-i textarea">
				<div class="textarea-wrapper">
					<textarea placeholder="Сообщение" name="comment" class="customer-message"></textarea>
				</div>
			</div>
			<input type="hidden" name = "hotel_id" value = "0">
			<div class="clear"></div>
			<input type = "hidden" name = "number" value = "' . md5("number") . '">
			<input type = "hidden" name = "code" value = "' . $captchastring . '">
			<button class="contacts-send letter-s" id="get_contacts">Отправить</button>
		</form>';
?>
<style>
	.padding-bottom-5px {
		padding-bottom: 5px;
	}
</style>
<!-- main-cont -->
<div class="inner-page contacts-page-m">
	<!-- breadcrumbs -->
	<div class="inner-breadcrumbs">
		<div class="content-wrapper">
			<div class="page-title">Контакты</div>
			<div class="clear"></div>
		</div>		
	</div>
	<!-- breadcrumbs -->

	<div class="contacts-page-holder">
		<div class="contacts-page">
			<div class = "our-offices">
				<div class = "our-offices-w">
					<div class = "office-item">
						<a class = "office-item-link office-item-link-active" data-adress = "129344, Россия, г. Москва, вн.тер.г. муниципальный округ Бабушкинский, Печорская ул., д. 3, кв. 241">Москва</a>
					</div>
				</div>
			</div>

			<div class="contacts-colls">
				<div class="contacts-colls-l">
					<div class="contact-colls-lbl">Как до нас добраться</div>
					<? if ($urAddrMSK != ''):?>
					<div class="contacts-colls-txt maot-contacts-colls-txt">
						<p class="maot-contacts-colls-title letter-s">Юридический адрес</p>
						<p class = "m-insert-adress"><?=$urAddrMSK;?></p>
					</div>
					<? endif; ?>
					<? if ($addrMSK != ''):?>
					<div class="contacts-colls-txt maot-contacts-colls-txt">
						<p class="maot-contacts-colls-title letter-s">Фактический адрес</p>
						<p class = "m-insert-adress"><?=$addrMSK;?></p>
					</div>
					<? endif; ?>
					<div class="contacts-colls-txt <?=$phones_amount;?>">
						<p class="maot-contacts-colls-title maot-contacts-colls-txt letter-s">Телефоны</p>
						<p class = "contacts-phone-item-single">Для корпоративных клиентов:<br><?=$phone1;?></p>
						<p class = "contacts-phone-item">Для корпоративных клиентов:<br><?=$phone1;?></p>
						<!--<p class = "contacts-phone-item"><?//=$phone2;?> корпоративный отдел</p>-->
					</div>
					<div class="contacts-colls-txt">
						<?=$actualData['closing']?>
					</div>
					<div class="contacts-colls-txt maot-contacts-colls-txt">
						<p class="maot-contacts-colls-title letter-s">Мы работаем</p>
						<p>по будням с 9:00 до 21:00, </p>
						<p>по выходным с 11:00 до 18:00</p>
						<div class="maot-metro-wrap">
							<?=$actualData['metro']?>
						</div>
					</div>
					<div class="contacts-colls-txt maot-contacts-colls-copyright">
						<p>&#169; 2004-<?=date('Y')?>. <span id = "company-name-info"><?=$actualData['name']?></span> <br> <?=$actualData['oferta']?></p>
					</div>
				</div>
				<div class="contacts-colls-r">
						<div class = "m-offices-map" id = "m-offices-map"></div>
				</div>

				<div class="clear"></div>

				<hr class="m-hr">

				<div class = "payment-methods-m">
					<img src="img/pay.png" alt="" class = "payment-methods-pic payment-methods-pic-1">
					<img src="img/prom.png" alt="" class = "payment-methods-pic payment-methods-pic-2">
					<img src="img/logo1h.png" alt="" class = "payment-methods-pic payment-methods-pic-3">
				</div>
				<div class="requisites-m">
					<?=$actualData['requisites']?>
					<div class = "requisites-m-item <?=$host == "region-hotel-service.ru" ? 'hidden-form-m' : '';?>">
						<p class = "write-us-title"><b>Связаться с нами:</b></p>
						<?=$contact_form?>
					</div>
				</div>
				<!--
				<div class="requisites-m">
					<?=$actualData['requisites']?>
					<div class = "requisites-m-item hidden-form-m">
						<p class = "write-us-title"><b>Связаться с нами:</b></p>
						<?=$contact_form?>
					</div>
				</div>-->
			</div>
			<div class="clear"></div>	
		</div>
	</div>
	<div class="maot-mapcontainer">
		<h2 class = "map-m-title"></h2>
	</div>
</div>
<div class="m-form">
	<div class="booking-form">
		<div class = "m-form-close"></div>
			<?=$contact_form?>
	</div>
</div>
</div>
		<!-- /main-cont -->