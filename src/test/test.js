import { obj, orderByProps } from '../index.js';
import { character, getSpecialValue} from '../destruction.js';



describe("sort func", () => {
 test('sort function by name and lvl', () => {
  let testEqual =
   [{ key: "name", value: "мечник" },
   { key: "level", value: 2 },
   { key: "attack", value: 80 },
   { key: "defence", value: 40 },
   { key: "health", value: 10 },
   ];
  expect(orderByProps(obj, ["name", "level"])).toEqual(testEqual);
 });
 test('sort function by HP and attack', () => {
  let testEqualTwo =
   [{ key: "health", value: 10 },
   { key: "attack", value: 80 },
   { key: "defence", value: 40 },
   { key: "level", value: 2 },
   { key: "name", value: "мечник" },
   ];
  expect(orderByProps(obj, ["health", "attack"])).toEqual(testEqualTwo);
 });
})


describe("character", () => {
 test('getSpecialValue()', () => {
  const testEqual = [
   {
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон'
   },
   {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание недоступно'
   }
  ];
  const descriptionDefoult = 'Описание недоступно'
  expect(getSpecialValue(character, descriptionDefoult)).toEqual(testEqual);
 });
})