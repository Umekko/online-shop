const $header = document.getElementById('header')

const $logoDiv = document.createElement('div')
const $logo = $header.appendChild($logoDiv)


const $navigationDiv = document.createElement('div')
const $navigation = $header.appendChild($navigationDiv)

const $logInDiv = document.createElement('div')
const $logIn = $header.appendChild($logInDiv)




$navigation.classList.add('navigation')
$logIn.classList.add('logIn')
 


$logo.innerHTML = `

    <img src="../img/optimus market.png" alt="">

`

$navigation.innerHTML = `

<a href="./main.html">Главная</a>
<a href="./categories.html">Категории</a>
<a href="./aboutUs.html">О нас</a>
<a href="./basket.html">Корзина</a>
<a href="./sales.html">Скидки</a>

`

$logIn.innerHTML = `

<p>Войти |</p>
<p>Зарегистрироваться</p>

`

