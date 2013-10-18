$(function () {

    var NOTES = {
        1: 'whole',
        2: 'half',
        4: 'quarter',
        8: 'eighth',
        16: 'sixteenth'
    };

    var N1 = function (note) {
        return NOTES[1] + '|' + note;
    }
    var N2 = function (note) {
        return NOTES[2] + '|' + note;
    }
    var N4 = function (note) {
        return NOTES[4] + '|' + note;
    }
    var N8 = function (note) {
        return NOTES[8] + '|' + note;
    }
    var N16 = function (note) {
        return NOTES[16] + '|' + note;
    }

    var R1 = function () {
        return NOTES[1] + '|rest';
    }
    var R2 = function () {
        return NOTES[2] + '|rest';
    }
    var R4 = function () {
        return NOTES[4] + '|rest';
    }
    var R8 = function () {
        return NOTES[8] + '|rest';
    }
    var R16 = function () {
        return NOTES[16] + '|rest';
    }


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

    var finalCountdown = {
        timeSignature: [4, 4],
        tempo: 120,
        instruments: {
            rightHand: {
                name: 'square',
                pack: 'oscillators'
            },
            leftHand: {
                name: 'square',
                pack: 'oscillators'
            }
        },

        notes: {
            rightHand: [
                N4('A3'), R8(), N16('F#4,A4,C#5'), N16('B4'), N4('F#4,A4,C5'), N4('A3,C#4,F#4'),
                N4('F#3'), R8(), N16('F#4,A4,D5'), N16('C#5'), N8('F#4,A4,D5'), N8('C#5'), N4('D4,F#4,B4'),
                N4('D4'), R8(), N16('F#4,B4,D5'), N16('C#5'), N4('F#4,B4,D5'), N4('B3,D4,F#4'),
                N4('G#3'), R8(), N16('E4,G#4,B4'), N16('A4'), N8('F4,G#4,B4'), N8('A4'), N8('F4,G#4'), N8('A4'),

                N4('A3'), R8(), N16('F#4,A4,E5'), N16('D5'), N4('F#4,A4,E5'), N4('A3,C#4,F#4'),
                N4('F#3'), R8(), N16('F#4,A4,D5'), N16('C#5'), N8('F#4,A4,D5'), N8('C#5'), N4('D4,F#4,B4'),
                N4('D4'), R8(), N16('F#4,B4,D5'), N16('C#5'), N4('F#4,B4,D5'), N4('B3,D4,F#4'),
                N4('G#3'), R8(), N16('E4,G#4,B4'), N16('A4'), N8('F4,G#4,B4'), N8('A4'), N8('F4,G#4'), N8('A4'),

                'dottedQuarter|C#4,F#4,A4', N16('G#4'), N16('A4'), 'dottedQuarter|B3,E4,B4', N16('A4'), N16('B4'),
                N8('E4,A4,C#5'), N8('B4'), N8('A4'), N8('G#4'), N4('D4,F#4'), N4('F#4,A4,D5'),
                'dottedHalf|F#4,G#4,C#5', N16('C#5'), N16('D5'), N16('C#5'), N16('B4'),
                N1('F4,G#4,C#5')
            ],


            leftHand: [
                'dottedHalf|F#2,F#3', N4('E2,E3'),
                N1('D2,D3'),
                N1('B1,B2'),
                N2('E2,E3'), N2('F2,F3'),

                'dottedHalf|F#2,F#3', N4('E2,E3'),
                N1('D2,D3'),
                N1('B1,B2'),
                N2('E2,E3'), N2('F2,F3'),

                N2('F#2,F#3'), N2('G#2,G#3'),
                N8('A2'), N8('G#2'), N8('F#2'), N8('E2'), N4('D2'), N4('E3'),
                N1('C#2'),
                N1('C#2')
            ]
        }
    };


    var music = new BandJS();
    music.load(finalCountdown);
    music.end();
    music.play();

});
