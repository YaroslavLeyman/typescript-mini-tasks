// Задача:
// Реализовать функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

// Структура данных склада с одеждой:
// ClothesWarehouse {
// 	jackets: "empty" | number;
// 	hats: "empty" | number;
// 	socks: "empty" | number;
// 	pants: "empty" | number;
// }

// Структура данных склада с канцтоварами:
// StationeryWarehouse {
// 	scissors: "empty" | number;
// 	paper: "empty" | boolean;
// }

// Структура данных склада с бытовой техникой:
// AppliancesWarehouse {
// 	dishwashers: "empty" | number;
// 	cookers: "empty" | number;
// 	mixers: "empty" | number;
// }

// Общая структура данных, наследует все данные из трех выше + добавляет свои
// TotalWarehouse {
// 	deficit: boolean;
// 	date: Date;
// }

// Главный объект со всеми данными, должен подходить под формат TotalWarehouse
// const totalData = {
// 	jackets: 5,
// 	hats: "empty",
// 	socks: "empty",
// 	pants: 15,
// 	scissors: 15,
// 	paper: true,
// 	dishwashers: 3,
// 	cookers: "empty",
// 	mixers: 14,
// };

// function printReport(data) {
// 	return `We need this items: ${"..."}`;
// 	// или
// 	return "Everything fine";
// }

// console.log(printReport(totalData));

//Решение:
type ValidAmount = "empty" | number;

interface ClothesWarehouse {
  jackets: ValidAmount;
  hats: ValidAmount;
  socks: ValidAmount;
  pants: ValidAmount;
}

interface StationeryWarehouse {
  scissors: ValidAmount;
  paper: "empty" | boolean;
}

interface AppliancesWarehouse {
  dishwashers: ValidAmount;
  cookers: ValidAmount;
  mixers: ValidAmount;
}

interface TotalWarehouse
  extends ClothesWarehouse,
    StationeryWarehouse,
    AppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

const totalData: TotalWarehouse = {
  jackets: 5,
  hats: "empty",
  socks: "empty",
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: "empty",
  mixers: 14,
  deficit: true,
  date: new Date(),
};

function printReport(data: TotalWarehouse): string {
  const result: string = Object.entries(data)
    .filter((item) => item[1] === "empty")
    .reduce((res, item) => `${res} ${item[0]},`, "");

  if (result.trim().length) {
    return `We need this items:${result.slice(0, -1)}`;
  } else {
    return "Everything fine";
  }
}

console.log(printReport(totalData));
