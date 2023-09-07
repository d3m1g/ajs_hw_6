export const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

export function orderByProps(obj, [propFirst, propTwo]) {
 let result = [];
 for (let key in obj) {
  result.push({ key: key, value: obj[key] })
  result.sort(function (a, b) {
   if (b['key'] == propFirst) { return 0 }
   if (a['key'] == propTwo) { return -1 }
   if (Object.values(a) < Object.values(b)) { return -2 }
  })
 }
 return result
};

orderByProps(obj, ["name", "level"])