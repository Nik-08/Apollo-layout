let headerMenu = document.querySelector(".header__menu"),
  headerBurger = document.querySelector(".header__burger"),
  headerBtn = document.querySelector(".header__btn"),
  headerBg = document.querySelector(".header__bg");

headerMenu.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
  headerBg.classList.toggle("active");
  headerBtn.classList.toggle("active");
});

$(".single__slider").slick({
  slidesToShow: 1,
  infinite: true,
  slidesToShow: 1,
  arrows: true,
});

$(".center__slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  infinite: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
});

const year = document.querySelector(".year"),
  date = new Date(),
  years = date.getFullYear();
year.textContent = years;
