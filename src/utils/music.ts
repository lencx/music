import * as Tone from 'tone';

export const synth = new Tone.PolySynth(Tone.Synth, Tone.MonoSynth).toDestination();
// const piano = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'];
const classic = [
  'B3', 'C#4', 'F#4', 'G#4',
  'C#5', 'D#5', 'E5', 'G#5',
  'B5', 'C#6', 'F#6', 'G#6'
];

export function noteDown(notes: boolean[] | number): void {
  const notesToPlay = [];
  if (!Array.isArray(notes)) {
    // single
    notesToPlay.push(classic[notes]);
  } else {
    // mulit
    notes.forEach((s, i) => s && notesToPlay.push(classic[i]) )
  }
  synth.triggerAttackRelease(notesToPlay, '16n');
}

// c、d、e、f、g、a、b
// do、re、mi、fa、sol、la、xi

// export function MusicTest() {
//   const synth = new Tone.Synth();

//   synth.oscillator.type = 'sine';
//   synth.toMaster();

//   const piano = document.body;

//   piano.addEventListener('mousedown', e => {
//     synth.triggerAttack(e.target.dataset.note);
//   });

//   piano.addEventListener('mouseup', e => {
//     synth.triggerRelease();
//   });

//   document.addEventListener('keydown', e => {
//     switch (e.key) {
//       case 'd':
//         return synth.triggerAttack('C4');
//       case 'r':
//         return synth.triggerAttack('C#4');
//       case 'f':
//         return synth.triggerAttack('D4');
//       case 't':
//         return synth.triggerAttack('D#4');
//       case 'g':
//         return synth.triggerAttack('E4');
//       case 'h':
//         return synth.triggerAttack('F4');
//       case 'u':
//         return synth.triggerAttack('F#4');
//       case 'j':
//         return synth.triggerAttack('G4');
//       case 'i':
//         return synth.triggerAttack('G#4');
//       case 'k':
//         return synth.triggerAttack('A4');
//       case 'o':
//         return synth.triggerAttack('A#4');
//       case 'l':
//         return synth.triggerAttack('B4');
//       default:
//         return;
//     }
//   });
//   // when the key is released, audio is released as well
//   document.addEventListener('keyup', e => {
//     switch (e.key) {
//       case 'd':
//       case 'r':
//       case 'f':
//       case 't':
//       case 'g':
//       case 'h':
//       case 'u':
//       case 'j':
//       case 'i':
//       case 'k':
//       case 'o':
//       case 'l':
//         synth.triggerRelease();
//     }
//   });
// }
