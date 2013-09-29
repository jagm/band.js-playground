$(function () {

    var NOTES = {
        1: 'whole',
        2: 'half',
        4: 'quarter',
        8: 'eighth'
    };
    
    var N1 = function(note) { return NOTES[1] + '|' + note; }
    var N2 = function(note) { return NOTES[2] + '|' + note; }
    var N4 = function(note) { return NOTES[4] + '|' + note; }
    var N8 = function(note) { return NOTES[8] + '|' + note; }

    var wlazlKotek = {
        timeSignature: [3, 4],
        tempo: 120,
        instruments: {
            rightHand: {
                name: 'square',
                pack: 'oscillators'
            }
        },
        notes: {
            rightHand: [
                N4('G4'), N4('E4'), N4('E4'),
                N4('F4'), N4('D4'), N4('D4'),
                N8('C4'), N8('E4'), N2('G4'),
                N4('G4'), N4('E4'), N4('E4'),
                N4('F4'), N4('D4'), N4('D4'),
                N8('C4'), N8('E4'), N2('C4')
            ]
        }
    };

    var music = new BandJS();
    music.load(wlazlKotek);
    music.end();
    music.play();

});