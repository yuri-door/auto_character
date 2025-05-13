const video = document.getElementById('video');
const defaultVideo = 'idle.webm';
let isPlaying = false;

function playEmotion(videoName) {
  if (isPlaying) return;
  isPlaying = true;

  video.loop = false;
  video.src = videoName;
  video.play();

  video.onended = () => {
    video.loop = true;
    video.src = defaultVideo;
    video.play();
    isPlaying = false;
  };
}

// 키 매핑
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey) {
    switch (e.code) {
      //case 'Digit1': playEmotion('please.webm'); break;
      ///case 'Digit2': playEmotion('bye.webm'); break;
      //case 'Digit3': playEmotion('thanks.webm'); break;
      //case 'Digit4': playEmotion('sorry.webm'); break;
      //case 'Digit5': playEmotion('goodjob.webm'); break;
      //case 'Digit6': playEmotion('cry.webm'); break;
      //case 'Digit7': playEmotion('sad.webm'); break;
      //case 'Digit8': playEmotion('scared.webm'); break;
      //case 'Digit9': playEmotion('teary.webm'); break;
      //case 'Digit0': playEmotion('vsign.webm'); break;
    }
  } else if (e.ctrlKey) {
    switch (e.code) {
      case 'Digit1': playEmotion('greeting.webm'); break;
      case 'Digit2': playEmotion('thanks.webm'); break;
      case 'Digit3': playEmotion('sad.webm'); break;
      //case 'Digit4': playEmotion('fast.webm'); break;
      //case 'Digit5': playEmotion('nomad.webm'); break;
      //case 'Digit6': playEmotion('pout.webm'); break;
      //case 'Digit7': playEmotion('tongue.webm'); break;
      //case 'Digit8': playEmotion('angry.webm'); break;
      //case 'Digit9': playEmotion('cando.webm'); break;
      //case 'Digit0': playEmotion('forgive.webm'); break;
    }
  }
});
