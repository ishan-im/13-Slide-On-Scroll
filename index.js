

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }


const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e){
  
  sliderImages.forEach(slideimage =>{

      // halfway of the image
      const slideInAthalf = (window.scrollY + window.innerHeight) - slideimage.height/2;
      
     // bottom of the image
      const imageBottom = slideimage.offsetTop + slideimage.height;

      const isHalfShown = slideInAthalf > slideimage.offsetTop;
      const isNotScrolledPast = imageBottom > window.scrollY;
       
     if(isHalfShown && isNotScrolledPast){
         slideimage.classList.add("active");
     }else{
         slideimage.classList.remove("active");
     }

      
  });
}

window.addEventListener("scroll", debounce(checkSlide ));