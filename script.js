// stemningsvideo
let NewVid = function (movie) {
    // create a <video>
    let vid = document.createElement('video');
    vid.controls = true;
    vid.src = movie;
    vid.autoplay = true;
    vid.loop = true;
    vid.muted = true;
    vid.load();
    vid.style.width = '100%';

    // append to <div id="stemvid">
    stemvid.appendChild(vid);
}
let stemningsvideo = 'video/stemningsvideo.mp4';
// use the object
NewVid(stemningsvideo);

let View = function (movie) {
    let vid = document.createElement('video');
    vid.controls = true;
    vid.src = movie;
    vid.load();
    vid.style.width= '100%';
    vid.style.zIndex= '-1';
    interview.appendChild(vid);
}

let målet = 'video/interview.mp4'
View(målet);



var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500); // Change image every 2 seconds
}