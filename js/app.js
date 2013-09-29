$(function() {

    var music = new BandJS();
    music.setTimeSignature(4,4);
    music.setTempo(120);

    var piano = music.createInstrument();

    piano.note('quarter', 'C4');
    piano.note('quarter', 'D4');
    piano.note('quarter', 'E4');
    piano.note('quarter', 'F4');

    piano.finish();
    music.end();

    music.play();

});