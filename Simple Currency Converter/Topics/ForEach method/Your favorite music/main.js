const music = ["rock", "pop", "hip-hop", "electronic"];

function myFavoriteMusic(item, index, array) {
  if (index <= music.length) {
    console.log(`My favorite music is ${item} choosing from ${array}`);
  }
}

music.forEach(myFavoriteMusic);
