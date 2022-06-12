const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const theatreIIX = await promiseTheaterIXX()
  const theatreVGC = await promiseTheaterVGC()

  let countData = 0;
  theatreIIX.map(dataSet => {
    if (dataSet.hasil == emosi) {
      countData++;
    }
  })

  theatreVGC.map(dataSet => {
    if (dataSet.hasil == emosi) {
      countData++;
    }
  })

  return countData;
};

module.exports = {
  promiseOutput,
};
