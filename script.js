

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

  

  const navSlide = () => {
      const tour = document.querySelector('#tour');
      const nav = document.querySelector('.dates-container');

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

  


  //document.getElementById('tour').onclick = function tourDiv () {
    //  document.getElementById('dates-container').style.display = "flex";
      //document.getElementById('tour').style.display = "none"
    //}


    //document.getElementsById('close').onclick = function closeTour () {
      //  document.getElementById('dates-container').style.display = "none";
        //document.getElementById('tour').style.display = "flex"
      
   

    //  document.getElementsById('manufa').onclick = function closeTour () {
      //  document.getElementById('dates-container').style.display = "none";
        //document.getElementById('tour').style.display = "flex"
      
  
    


//let tourDates = document.querySelector("dates-container")
//let datesButton = document.querySelector("#tour")

//datesButton.addEventListener("click", () => {

  //  showDates = !showDates
    //if (showDates === true) {
 //       tourDates.style.display = "flex"
   // } else {
     //   tourDates.style.display = "none"
    //}

    //datesButton.innerText = buttonStates[datesButton.innerText]


//})

//let showDates = false

//let buttonStates = {
  //  "/ Tour /" : "/ X /",
    //"/ X /" : "/ Tour /"
//}
  
