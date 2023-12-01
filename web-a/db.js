// db.js

const dataFotoRandom = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://source.unsplash.com/random/301x301`,
  desc: `Deskripsi foto ke-${index + 1}`,
}));

module.exports = {
  dataFotoRandom,
};
