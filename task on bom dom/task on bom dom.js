// get slider items 
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//get number of slides
var slideCount = sliderImages.length;
 
//set img
var currentSlide = 1;

// slide element
var slideNumberElement = document.getElementById('slide-number');

// Previous and next
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
       

// create the main ul Element 
var paginationElement = document.createElement('ul');

paginationElement.setAttribute('id','pagination-ul');

// create list items based on slides

for(var i = 1;i <= slideCount; i++){
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index',i);
    paginationItem.appendChild(document.createTextNode(i));
   paginationElement.appendChild(paginationItem);
  //Add The Created Ul Element to The Page 
  
}
document.getElementById('indicators').appendChild(paginationElement); 

// get the new created Ul

var paginationCreatedUl = document.getElementById('pagination-ul');
// Trigger The Checker Function



var paginationBullets  = Array.from(document.querySelectorAll('#pagination-ul li'));
 
for(var i=0;i<paginationBullets.length;i++){
  paginationBullets[i].onclick=function() {
      currentSlide=parseInt(this.getAttribute('data-index'));
     theChecker(); 
  }       

}

theChecker();

// Next Slider Function 
function nextSlide(){
    if(nextButton.classList.contains('disabled')){
        return false;
        
    }else{
        currentSlide++;
        theChecker();
    }
}      


// prev Slider Function 
function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        return false;
    }else{
        currentSlide--;
        theChecker();
    }    

}


//Handle click on prev and next
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//function next slide


// create the cheaker function
function theChecker(){
   slideNumberElement.textContent = 'slide # '  +     (currentSlide)  + ' of ' + (slideCount) ;
    
    removeAllActive();
    
   // set active class on current slide
    
   sliderImages[currentSlide-1].classList.add('active'); 
    paginationCreatedUl.children[currentSlide-1].classList.add('active');
    
// check if current slide is the first 
 if(currentSlide==1) {
     prevButton.classList.add('disabled');
 } else{
     prevButton.classList.remove('disabled');
 } 
    
 // check if current slide is the last 
 if(currentSlide==slideCount) {
    nextButton.classList.add('disabled');
 } else{
     nextButton.classList.remove('disabled');
 }    
    
}

// Remove all active classes from images and pagination 


function removeAllActive(){
  sliderImages.forEach(function(img){
    img.classList.remove('active');  
  }); 
    
// Loop  through pagination Bullets 
    
paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active');
        
    });
}