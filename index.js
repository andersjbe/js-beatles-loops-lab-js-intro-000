// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for(let i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var index = 0;
  while(index < facts.length) {
    facts[index] += '!!!';
    index++;
  }
  return facts;
}
