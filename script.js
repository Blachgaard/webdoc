// stemningsvideo
let NewVid = function(movie) {
      // create a <video>
      let vid = document.createElement('video');
      vid.src = movie;
      vid.style.width = '100%';
      vid.style.maxWidth = '100%';
      vid.style.height = '100vh';
      vid.autoplay = true;
      vid.loop = true;
      vid.load();
      // append to <div id="stemvid">
      stemvid.appendChild(vid);
    }
    let stemningsvideo = 'video/stemningsvideo.mp4';
    // use the object
    NewVid( stemningsvideo );