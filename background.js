const image= ["img/bg0.jpeg", "img/bg1.jpeg", "img/bg2.jpeg"];


const images = [
                "https://images.unsplash.com/photo-1487762488615-8a011458b53e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGVuZ2xhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGVuZ2xhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1604403965718-439a879557da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGVkaW5idXJnaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
                "https://images.unsplash.com/photo-1591554338378-6dcc422b8249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG5ldyUyMHplYWxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
           


]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const landing = document.querySelector(".landing");

const backgroundImage = "url('"+ chosenImage +"')"; 
landing.style.backgroundImage = backgroundImage;
