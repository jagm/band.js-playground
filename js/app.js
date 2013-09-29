$(function () {

    var music = new BandJS();
    music.setTimeSignature(3, 4);
    music.setTempo(120);

    var rightHand = music.createInstrument('square');

    rightHand.note('quarter', 'G4')
        .note('quarter', 'E4')
        .note('quarter', 'E4')
        .note('quarter', 'F4')
        .note('quarter', 'D4')
        .note('quarter', 'D4')
        .note('eighth', 'C4')
        .note('eighth', 'E4')
        .note('half', 'G4')
        .note('quarter', 'G4')
        .note('quarter', 'E4')
        .note('quarter', 'E4')
        .note('quarter', 'F4')
        .note('quarter', 'D4')
        .note('quarter', 'D4')
        .note('eighth', 'C4')
        .note('eighth', 'E4')
        .note('half', 'C4')
        .finish();

    music.end();

    music.play();

});