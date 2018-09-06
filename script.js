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
