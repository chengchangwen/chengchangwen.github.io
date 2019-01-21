const ap = new APlayer({
    container: document.getElementById('aplayer'),
    //fixed: true,
    autoplay: false,
    audio: [
      {
        name: "If I Lose Myself",
        artist: 'One Republic',
        url: '/music/03 If I Lose Myself.mp3',
        cover: '',
      }
    ]
});