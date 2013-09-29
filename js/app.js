$(function () {

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
                'quarter|G4', 'quarter|E4', 'quarter|E4',
                'quarter|F4', 'quarter|D4', 'quarter|D4',
                'eighth|C4', 'eighth|E4', 'half|G4',
                'quarter|G4', 'quarter|E4', 'quarter|E4',
                'quarter|F4', 'quarter|D4', 'quarter|D4',
                'eighth|C4', 'eighth|E4', 'half|C4'
            ]
        }
    };

    var music = new BandJS();
    music.load(wlazlKotek);
    music.end();
    music.play();

});