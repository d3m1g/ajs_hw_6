export const character = {
 name: 'Лучник',
 type: 'Bowman',
 health: 50,
 level: 3,
 attack: 40,
 defence: 10,
 special: [
  {
   id: 8,
   name: 'Двойной выстрел',
   icon: 'http://...',
   description: 'Двойной выстрел наносит двойной урон'
  },
  {
   id: 9,
   name: 'Нокаутирующий удар',
   icon: 'http://...'
  }
 ]
};
export function getSpecialValue(arr, descriptionDefoult) {
 let result = []
 for (let key in arr.special) {
  let { id, name, icon, description = descriptionDefoult } = character.special[key]
  result.push({ id, name, description, icon })
 }
 return result
};
const descriptionDefoult = 'Описание недоступно';
getSpecialValue(character, descriptionDefoult);