/**
 * @author: lencx
 * @create_at: Jul 17, 2020
 */

import * as Tone from 'tone';
import { parseHash, setHash } from './tools';

export const synth = new Tone.PolySynth(Tone.Synth, Tone.MonoSynth).toDestination();
// set the attributes across all the voices using 'set'
synth.set({ detune: -900 });

export const musicTypes = {
  // classic: [
  //   'B7', 'C#5', 'F#8', 'G#5',
  //   'C#6', 'D#8', 'E5', 'G#8',
  //   'B8', 'C#8', 'F#5', 'G#4'
  // ],
  classic: [
    'B4', 'C#4', 'F#4', 'G#4',
    'C#5', 'D#5', 'E5', 'G#5',
    'B5', 'C#6', 'F#6', 'G#6'
  ],
  piano: [
    'C4', 'C#4', 'D4', 'D#4',
    'E4', 'F4', 'F#4', 'G4',
    'G#4', 'A4', 'A#4', 'B4'
  ],
  // defalut: ['C', '#C', 'D', '#D', 'E', 'F', '#F', 'G', '#G', 'A', '#A', 'B'],
};

export function playAudio(notes: boolean[] | number, musicType: string = 'classic'): void {
  const notesToPlay = [];
  const isArray = Array.isArray(notes);
  const _type = musicTypes[musicType];
  if (!isArray) {
    // single
    _type[notes] && notesToPlay.push(_type[notes]);
  } else {
    // mulit
    notes.forEach((s, i) => s && notesToPlay.push(_type[i]));
  }
  if (!notesToPlay.length) return;
  // play a chord
  console.log(`audio: `, notesToPlay);
  if (!isArray) synth.set({ detune: -1200 });
  synth.triggerAttackRelease(notesToPlay, isArray ? '4n' : '8n.');
}

export function initGrid(row?: number = 8) {
  const data = parseHash() || {};
  if (!data.grid) {
    const defaultGrid = new Array(row).fill('0');
    data.grid = defaultGrid;
    setHash('grid', defaultGrid);
  }
  return data;
}

// c、d、e、f、g、a、b
// do、re、mi、fa、sol、la、xi