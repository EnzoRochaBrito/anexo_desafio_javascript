

//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    constructor(image, title, url){
        this.Image = image;
        this.Title = title;
        this.Url   = url;
    }
    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){

        this.currentCarousel = carouselArr[Carousel._sequence];
        this.carouselImage   = this.currentCarousel.Image;
        this.carouselTitle   = this.currentCarousel.Title;
        this.carouselUrl     = this.currentCarousel.Url;

        document.querySelector('#carousel').innerHTML = `<a href="${this.carouselUrl}"><img src="img/${this.carouselImage}" alt="${this.carouselTitle}"></a>`
        document.querySelector('#carousel-title').innerHTML = `${this.carouselTitle}`


        if (Carousel._sequence >= Carousel._size-1){
            Carousel._sequence = 0;
        } else {
            Carousel._sequence++;
        }

    }
};

