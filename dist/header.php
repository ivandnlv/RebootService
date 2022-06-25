<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Reboot
 */

?>
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Сервисный центр Reboot</title>
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
    <link rel="manifest" href="favicon/site.webmanifest" />
    <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri (); ?>/css/slick.css" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/font.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri (); ?>/css/style.min.css" />
  </head>
  <body id="body">
    <header class="header">
      <a class="header__logo" href="#" id="logo">
        <img src="img/logo.svg" alt="logo" />
      </a>
      <div class="header__hamburger">
        <div class="header__hamburger-line"></div>
        <div class="header__hamburger-line"></div>
        <div class="header__hamburger-line"></div>
      </div>
      <ul class="header__list">
        <li><a href="#services">Наши услуги</a></li>
        <li><a href="#about">О компании</a></li>
        <li><a href="#reviews">Отзывы</a></li>
        <li><a href="#orders">Выполненные заказы</a></li>
        <li><a href="#contacts">Контакты</a></li>
      </ul>
      <div class="header__address">
        <div class="header__address-img">
          <img src="icons/address.svg" alt="address-icon" />
        </div>
        <div class="header__address-info">
          <div>г. Салават, ул. Островского 45</div>
          <a href="#map">Мы на карте</a>
        </div>
      </div>
      <div class="header__phone">
        <a href="tel:+79174086117" class="header__phone-tel">+7 (917) 408 61 17</a>
        <a href="tel:+79174086117" class="header__phone-img">
          <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.234 13.1712V15.4647C15.2349 15.6777 15.1912 15.8884 15.1057 16.0835C15.0203 16.2786 14.8949 16.4537 14.7377 16.5977C14.5805 16.7416 14.3949 16.8512 14.1929 16.9194C13.9908 16.9876 13.7766 17.013 13.5642 16.9938C11.2071 16.7382 8.94297 15.9343 6.95371 14.6467C5.10296 13.4729 3.53384 11.9068 2.35779 10.0596C1.06326 8.0651 0.257647 5.79431 0.00621728 3.43118C-0.0129243 3.21977 0.0122494 3.00669 0.0801352 2.80552C0.148021 2.60434 0.257132 2.41948 0.400521 2.2627C0.54391 2.10592 0.718435 1.98066 0.912984 1.89489C1.10753 1.80912 1.31785 1.76472 1.53053 1.76452H3.82849C4.20022 1.76087 4.56061 1.89226 4.84247 2.1342C5.12433 2.37613 5.30843 2.71211 5.36046 3.0795C5.45745 3.81349 5.63732 4.53418 5.89665 5.22781C5.99971 5.50145 6.02201 5.79884 5.96092 6.08474C5.89983 6.37065 5.7579 6.63308 5.55196 6.84095L4.57915 7.81189C5.66958 9.7259 7.25739 11.3107 9.17507 12.399L10.1479 11.4281C10.3561 11.2225 10.6191 11.0809 10.9055 11.0199C11.192 10.9589 11.4899 10.9812 11.7641 11.084C12.4591 11.3429 13.1811 11.5224 13.9165 11.6192C14.2886 11.6716 14.6284 11.8587 14.8713 12.1448C15.1143 12.431 15.2433 12.7962 15.234 13.1712Z"
              fill="#E2001A"
            />
            <path
              d="M9.91052 4.05809C10.6587 4.20378 11.3463 4.56898 11.8853 5.10696C12.4243 5.64494 12.7902 6.33121 12.9362 7.07795M9.91052 1C11.4649 1.17235 12.9144 1.8671 14.021 2.97018C15.1276 4.07325 15.8255 5.51909 16.0001 7.0703"
              stroke="#E2001A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
