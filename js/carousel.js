

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
    
    
    static Start(arr, home=true, time=2000){
        if(arr){
            
            if(arr.length > 0){
                Carousel._isHome = home;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.InsertContent(arr);
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, time);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    
    static Next(){
    
        document.querySelectorAll('#carousel a').forEach(element => {
            element.style.display = 'none';
        });

        document.querySelector(`#carousel a:nth-child(${Carousel._sequence+1})`).style.display = 'inline';

        if (Carousel._isHome){
            document.querySelectorAll('#carousel-title a').forEach(element => {
                element.style.display = 'none';
            });
            document.querySelector(`#carousel-title a:nth-child(${Carousel._sequence+1})`).style.display = 'inline';
        }


        (Carousel._sequence >= Carousel._size-1) ? Carousel._sequence = 0 : Carousel._sequence++;
        
        // console.log(Carousel._sequence)
        
        // if (Carousel._sequence >= Carousel._size-1){
        //     Carousel._sequence = 0;
        // } else {
        //     Carousel._sequence++;
        // }

    }
    
    static InsertContent(arr){
        for (let i = 0; i < arr.length; i++){

            const currentCarousel = arr[i];
            const carouselImage   = currentCarousel.Image;
            const carouselUrl     = currentCarousel.Url;
            const carouselTitle   = currentCarousel.Title;
            if (Carousel._isHome){
                document.querySelector('#carousel').innerHTML += `<a href="${carouselUrl}"><img src="img/${carouselImage}" alt="${carouselTitle}"></a>`
                document.querySelector('#carousel-title').innerHTML += `<a href="${carouselUrl}">${carouselTitle}</a>`
            } else {
                document.querySelector('#carousel').innerHTML += `<a href="${carouselUrl}"><img src="img/${carouselImage}"></a>`
            }
        }
    }
};

