/*toggle the menus*/
const nav = document.querySelector('#header nav') // Aqui selecionamos o elemento nav que esta dentro de outro elemento de id header, e atribuimos ele a const nav.
const toggle = document.querySelectorAll('nav .toggle') // Aqui selecionamos todos elementos com classe toggle que estão dentro de um nav e atribuimos a const toggle.No caso pegou dois elementos.

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*When click in menu, hidden menu*/

const links = document.querySelectorAll('nav ul li a') // Aqui selecionamos os elementos "a" que estão dentro de um "li" dentro de "ul" dentro de "nav" e atribuiremos a const links. E no caso os "a" são links que direcionam para parter da minha pagina no próprio documento.

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Shadown header*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHearderWhenScroll() {
  if (this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

//Testimonial Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//ScrollReveal: mostrar elementos quando der scroll na pagina

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about ,text,
  #services header, #services .card,
  #testimonials header, #testimonials testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 50 }
)

//Back to top: voltar ao top
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//Menu ativo conforme a seção visivel na pagina
const sections = document.querySelectorAll('main section[id]')
function activateManuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHearderWhenScroll()
  backToTop()
  activateManuAtCurrentSection()
})
