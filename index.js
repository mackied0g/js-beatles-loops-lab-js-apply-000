Function theBeatlesPlay(musician, instrument) {
  var x = [];
  for(var i=0; i<musician.length; i++) {
  x.push(musician[i] + ' plays ' + instrument[i])
  }
  return x;
}