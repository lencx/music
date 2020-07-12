/**
 * @author: lencx
 * @create_at: Jul 11, 2020
 */

/*
* @method parseHashGrid
* ======================================================
*  [0,    0,    0,   0,   0,   0,  0,  0,  0, 0, 0, 0]  -- default
*  [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]  -- sum of selected grids
*  [true, false, ...]                                   -- active: select the `true`, the `false` is not selected
* =======================================================
*/
export function parseHashGrid(hash: string = window.location.hash): Array<boolean>[] {
  if (!hash || !/^#/.test(hash)) return;
  const hashArray = hash.substr(1).split(/-+/);
  let i = 0;
  const grids = [];
  while (i < hashArray.length - 1) {
    if (/^\d+$/.test(i)) {
      const temp = (+hashArray[i]).toString(2).padStart(12, '0').split('').map(j => j === '1');
      grids.unshift(temp);
    }
    i++;
  }
  return grids;
}

export function parseHashGrid2(hash: string = window.location.hash): Array<boolean>[] {
  if (!hash || !/^#/.test(hash)) return;
  const hashArray = hash.substr(1).split(/-+/).filter(i => (i === '0' || parseInt(i, 10)));
  const grids = [];
  for (let i = hashArray.length - 1; i >= 0; i--) {
    let temp = Array(12).fill(false);
    // 11 = 12 - 1
    for (let j = 11; j >= 0; j--) {
      temp[j] = (hashArray[i] & (1 << (j))) !== 0;
    }
    grids.push(temp.reverse());
  }
  return grids;
}
