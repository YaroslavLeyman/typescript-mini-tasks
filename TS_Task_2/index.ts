// Исходный код:
// const electricityUserData = {
//   readings: 95,
//   units: "kWt",
//   mode: "double",
// };

// const waterUserData = {
//   readings: 3,
//   units: "m3",
// };

// const elRate = 0.45;
// const wRate = 2;

// const monthPayments = [0, 0];

// const calculatePayments = (elData, wData, elRate, wRate) => {
//   if (elData.mode === "double" && elData.readings < 50) {
//     monthPayments[0] = elData.readings * elRate * 0.7;
//   } else {
//     monthPayments[0] = elData.readings * elRate;
//   }

//   monthPayments[1] = wData.readings * wRate;
// };

// calculatePayments(electricityUserData, waterUserData, elRate, wRate);

// const sendInvoice = (monthPayments, electricityUserData, waterUserData) => {
//   const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${monthPayments[0]}€

//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${monthPayments[1]}€`;

//   return text;
// };

// Решение с типизацией:
const electricityUserData = {
  readings: 95,
  units: "kWt",
  mode: "double",
};

const waterUserData = {
  readings: 3,
  units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0];

const calculatePayments = (
  { readings, mode }: { readings: number; mode: string },
  wData: { readings: number },
  elRate: number,
  wRate: number
): void => {
  if (mode === "double" && readings < 50) {
    monthPayments[0] = readings * elRate * 0.7;
  } else {
    monthPayments[0] = readings * elRate;
  }

  monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
  [el, water]: number[],
  electricityUserData: { readings: number; units: string },
  waterUserData: { readings: number; units: string }
): string => {
  const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${el}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;

  return text;
};

const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);
