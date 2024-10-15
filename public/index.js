// toogle button
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]')
    hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('left-[0]')
        hamburger.classList.toggle('ri-close-large-line')
    })
})

// show scroll up
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up")

  if(this.scrollY >= 205) {
    scrollUpBtn.classList.remove("-bottom-1/2")
    scrollUpBtn.classList.add("bottom-4")
  } else {
    scrollUpBtn.classList.add("-bottom-1/2")
    scrollUpBtn.classList.remove("bottom-4")
  }
}

// change background header
const scrollHeader = () => {
  const header = document.getElementById("navbar")

  if(this.scrollY >= 205) {
   header.classList.add("border-b", "border-yellow-500")
  } else {
   header.classList.remove("border-b", "border-yellow-500")
  }
}



window.addEventListener("scroll", scrollHeader)

// swiper
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});