/**
 * @author: lencx
 * @create_at: Jul 11, 2020
 */

export const Query = {
  parse(search?: string = window.location.search) {
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

export function parseHash(hash?: string = window.location.hash): Array<string> {
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
    const _grid = findStrReplace(grid, value, site);
    // console.log(`[92] tools.ts: `, value);
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
export function sumToBinary(sum: number): Array<boolean> {
  return sum.toString(2).padStart(12, '0').split('').map(j => j === '1').reverse();
}

export function findStrReplace(str: string, replaceStr: string, site: number) {
  let s = 0;
  return str.replace(/(\d+)/g, item => {
    s++;
    return (s-1) === site ? replaceStr : item;
  });
}

// https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/copyToClipboard.md
export function copyToClipboard(str: string) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};