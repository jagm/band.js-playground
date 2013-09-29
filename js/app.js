$(function() {

    var music = new BandJS();
    music.setTimeSignature(3,4);
    music.setTempo(120);

    var piano = music.createInstrument();

    piano.note('quarter', 'G4');
    piano.note('quarter', 'E4');
    piano.note('quarter', 'E4');

    piano.note('quarter', 'F4');
    piano.note('quarter', 'D4');
    piano.note('quarter', 'D4');

    piano.note('eighth', 'C4');
    piano.note('eighth', 'E4');
    piano.note('half', 'G4');

    piano.note('quarter', 'G4');
    piano.note('quarter', 'E4');
    piano.note('quarter', 'E4');

    piano.note('quarter', 'F4');
    piano.note('quarter', 'D4');
    piano.note('quarter', 'D4');

    piano.note('eighth', 'C4');
    piano.note('eighth', 'E4');
    piano.note('half', 'C4');

    piano.finish();
    music.end();

    music.play();

});