import Swiper from 'swiper/swiper-bundle'

// Кнопка смена языка
const languageBtn = document.querySelectorAll('.language__btn')

languageBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		languageBtn.forEach(btn => {
			btn.classList.remove('language__btn--active')
		})
		btn.classList.add('language__btn--active')
	})
})


// Менюшка
const menuBtn = document.querySelector('.menu-btn')
const menuBtnFixed = document.querySelector('.menubtn-fixed')
const menu = document.querySelector('.menu')
const menuFixed = document.querySelector('.menu-fixed')

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('menu-btn--active')
	menu.classList.toggle('menu--active')
})

menuBtnFixed.addEventListener('click', () => {
	menuBtnFixed.classList.toggle('menu-btn--active')
	menuFixed.classList.toggle('menu--active')
})



const menuLinks = document.querySelectorAll('.menu__link')
const menuItems = document.querySelectorAll('.menu__item')

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		menuItems.forEach(item => {
			item.classList.remove('menu__item--active')
		})
		link.closest('li').classList.add('menu__item--active')
	})
})

window.addEventListener('scroll', () => {
	const header = document.querySelector('.header__top--fixed')
	const y = window.scrollY

	if (y >= screen.height) {
		header.classList.add('open')
	} else {
		header.classList.remove('open')
		menuBtnFixed.classList.remove('menu-btn--active')
		menuFixed.classList.remove('menu--active')
	}
})



// Слайдер
const mediaSlider = new Swiper('.media-slider', {
	slideClass: 'media-slider__item',
	wrapperClass: 'media-slider__wrapper',
	slidesPerView: 3,
	spaceBetween: 80,
	navigation: {
		nextEl: '.media-slider__button-next',
		prevEl: '.media-slider__button-prev'
	},
	pagination: {
		el: '.media-slider__pagination',
		clickable: true
	},
	breakpoints: {
		1200: {
			spaceBetween: 80
		},

		1050: {
			spaceBetween: 40
		},

		875: {
			slidesPerView: 2.5,
			spaceBetween: 40
		},

		700: {
			slidesPerView: 2,
			spaceBetween: 40
		},

		530: {
			slidesPerView: 1.5,
			spaceBetween: 30
		},

		435: {
			slidesPerView: 1.25,
			spaceBetween: 30
		},

		355: {
			slidesPerView: 1
		},

		280: {
			slidesPerView: 0.9
		}
	}
})

// Табы которые при клике на слайд 
const tabs = document.querySelectorAll('.media-slider__item')
const contentBlocks = document.querySelectorAll('.media__content')


tabs.forEach(tab => {
	const href = tab.getAttribute('href').slice(1)
	tab.addEventListener('click', (e) => {
		e.preventDefault()
		tabs.forEach(tab => {
			tab.classList.remove('media-slider__item--active')
		})
		contentBlocks.forEach(content => {
				content.classList.remove('media__content--active')
		})
		tabsTabs.forEach(tab => {
			tab.classList.remove('media__content-link--active', 'media__content-link--hide')
		})
		tabsContentBlocks.forEach(content => {
			content.classList.remove('media__content-box--active')
		})
		tab.classList.add('media-slider__item--active')
		contentBlocks.forEach(content => {
			const id = content.id
			if(id === href) {
				content.classList.add('media__content--active')
			}
		})
	})
})

// Табы внутри табов-слайдов.

const tabsTabs = document.querySelectorAll('.media__content-link')
const tabsContentBlocks = document.querySelectorAll('.media__content-box')

tabsTabs.forEach(tab => {
	const href = tab.getAttribute('href').slice(1)
	tab.addEventListener('click', (e) => {
		e.preventDefault()
		tabsTabs.forEach(tab => {
			tab.classList.remove('media__content-link--active', 'media__content-link--hide')
		})
		tabsContentBlocks.forEach(content => {
			content.classList.remove('media__content-box--active')
		})
		tab.classList.add('media__content-link--active')
		tabsTabs.forEach(tab => {
			tab.classList.add('media__content-link--hide')
		})
		tabsContentBlocks.forEach(content => {
			const id = content.id
			if(id === href) {
				content.classList.add('media__content-box--active')
			}
		})
	})
})

// Кнопка Вернуться назад
const backBtns = document.querySelectorAll('.content-box__description-btn')

backBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		tabsTabs.forEach(tab => {
			tab.classList.remove('media__content-link--active', 'media__content-link--hide')
		})
		tabsContentBlocks.forEach(content => {
			content.classList.remove('media__content-box--active')
		})
	})
})

// Меняю текст при маленьком разрешении.
if(window.innerWidth < 490) {
	backBtns.forEach(btn => {
		btn.innerHTML = 'Вернуться'
	})
}

const number = document.querySelector('.header__number')
if(window.innerWidth < 435) {
	number.innerHTML = ''
}

// Анимация прокрутки к якорю

const links = document.querySelectorAll('.anchor-link')

for (let link of links) {
	link.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = link.getAttribute('href').substr(1)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}








