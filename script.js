// stemningsvideo
let newvid = function(movie) {
      // create a <video>
      let vid = document.createElement('video');
      vid.src = movie;
      vid.style.width = '100%';
      vid.style.maxWidth = '100%';
      vid.autoplay = true;
      vid.loop = true;
      vid.load();
      // append to <div id="stemvid">
      stemvid.appendChild(vid);
    }
    let stemningsvideo = 'video/Stemnings_Video.mp4';
    // use the object
<<<<<<< HEAD
    NewVid (stemningsvideo);
=======
    newvid( stemningsvideo );
>>>>>>> e18a1aa19bdf3d000478e34ed6886c5e9b7e90a9
