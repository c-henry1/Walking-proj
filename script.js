

var slideIndex1 = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > x.length) {slideIndex1 = 1}
    x[slideIndex1-1].style.display = "block";
    setTimeout(carousel, 1000); // Change image every 2 seconds
  }

  var slideIndex = 0;
  carouselr();
  
  function carouselr() {
    var i;
    var x = document.getElementsByClassName("mySlides-r");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carouselr, 1000); // Change image every 2 seconds
  }

  
    const tour = document.querySelector('#tour');
    const nav = document.querySelector('.dates-container');
    const navActive = document.querySelector('.dates-container-active');
  
    const navSlide = () => {
        tour.addEventListener('click',() =>{
        nav.classList.toggle('dates-container-active');
        })

    
    }

  navSlide();







  const textChange = () => {
    const tour = document.querySelector('#tour');

  tour.addEventListener('click',() =>{
    if (tour.innerHTML === "/ Tour /") {
        tour.innerHTML = "/ X /";
     } else {
        tour.innerHTML = "/ Tour /";
     }
      })
  }

  textChange();

  


  
  
