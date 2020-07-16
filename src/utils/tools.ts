/**
 * @author: lencx
 * @create_at: Jul 11, 2020
 */

/*
* @method parseHashGrid
* ======================================================
*  [0, 0, 0, 0, 0,  0,  0,  0,   0,   0,   0,    0   ]  -- default
*  [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]  -- sum of selected grids
*  [true, false, ...]                                   -- active: select the `true`, the `false` is not selected
* =======================================================
*/
// export function parseHashGrid(hash: string = window.location.hash): Array<boolean>[] | null {
//   if (!hash || !/^#/.test(hash)) return null;
//   const hashArray = hash.substr(1).split(/-+/);
//   let i = 0;
//   const grids = [];
//   while (i < hashArray.length) {
//     if (/^\d+$/.test(hashArray[i])) {
//       const temp = (+hashArray[i]).toString(2).padStart(12, '0').split('').map(j => j === '1');
//       grids.push(temp);
//     }
//     i++;
//   }
//   return grids;
// }

// export function parseHashGrid2(hash: string = window.location.hash): Array<boolean>[] | null {
//   if (!hash || !/^#/.test(hash)) return null;
//   const hashArray = hash.substr(1).split(/-+/).filter(i => (i === '0' || parseInt(i, 10)));
//   const grids = [];
//   for (let i = hashArray.length - 1; i >= 0; i--) {
//     let temp = Array(12).fill(false);
//     // 11 = 12 - 1
//     for (let j = 11; j >= 0; j--) {
//       temp[j] = (+hashArray[i] & (1 << (j))) !== 0;
//     }
//     grids.push(temp.reverse());
//   }
//   return grids;
// }

export const Query = {
  parse(search: string = window.location.search) {
    if (!search) return;
    const hashes = search.slice(search.indexOf('?') + 1).split('&');
    return hashes.reduce((acc, hash) => {
      const [key, val] = hash.split('=');
      return { ...acc, [key]: decodeURIComponent(val) };
    }, {});
  },

  get(key: string) {
    const params = this.parse(window.location.search);
    if (params) {
      return params[key];
    }
  },

  stringify(query: object) {
    const str = Object.keys(query)
      .map(key => `${key}=${encodeURIComponent(query[key] || '')}`)
      .join('&');
    return str;
  },
};

export function parseHash(hash: string = window.location.hash): String[] {
  if (!hash || !/^#/.test(hash)) return null;
  const params = window.location.hash.split('-?');
  const grid = params[0];
  const search = params[1] || '';
  const a = grid.substr(1).split(/-+/).filter(i => i !== '') || [];
  const b = Query.parse(search) || null;
  return { grid: a, options: b };
}

export function setHash(key: string, value: string | number | Array<number>, site?: number) {
  if (!key) return;
  const params = window.location.hash.split('-?');
  const grid = params[0];
  const search = params[1] || '';
  const _search = search ? `-?${search}` : '';
  if (key === 'grid') {
    if (Array.isArray(value)) {
      value = value.join('-');
    }
    window.history.replaceState({}, '', '#' + value + _search);
  } else if (key === 'setSum') {
    const _grid = findStrReplace(grid, sumArray(value), site);
    window.history.replaceState({}, '', _grid + _search);
  } else {
    let o: any = Query.parse(search);
    o[key] = value;
    window.history.replaceState({}, '', grid + '-?' + Query.stringify(o));
  }
}

export function sumArray(array: Array<number>): number {
  return eval(array.join('+'));
}

// 1 -> 2 -> 4 ... -> 1024 -> 2048 // value
// 0 -> 1 -> 2 ... -> 11   -> 12   // index
export function sumToBinary(sum: Number): Array<Boolean> {
  return sum.toString(2).padStart(12, '0').split('').map(j => j === '1').reverse();
}

export function findStrReplace(str, replaceStr, site) {
  let s = 0;
  return str.replace(/(\d+)/g, item => {
    s++;
    return (s-1) === site ? replaceStr : item;
  });
}

// const str = 'a bbb cc aavvvv zzz bb ccc'
// findStr(str, 'cc', 'xxx', 2)
// => 'a bbb cc aavvvv zzz bb xxxc'
// export function findStrReplace(oStr: string, matchStr: string, replaceStr: string, n: number): string {
//   const regex = new RegExp(`((?:[^${matchStr}]*${matchStr}){${n-1}}[^${matchStr}]*)${matchStr}`, 'g');
//   return oStr.replace(regex, `$1${replaceStr}`);
// }
