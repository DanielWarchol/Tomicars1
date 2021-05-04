// slide images  
let images = document.getElementsByClassName('image');

let activeimages = document.getElementsByClassName('active');

for( var i = 0; i < images.length; i++) {
    images[i].addEventListener('mousedown' , function() {

         if (activeimages.length > 0){
             activeimages[0].classList.remove('active')
         }

        this.classList.add('active')
        document.getElementById('gallery-big').src = this.src

    });
}

let buttonLeft = document.getElementById('slideleft');
let buttonRight = document.getElementById('slideright');

buttonLeft.addEventListener('click' , function(){
    document.getElementById('slider').scrollLeft -= 300
});

buttonRight.addEventListener('click' , function(){
    document.getElementById('slider').scrollLeft += 300
});


