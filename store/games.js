const games = [
  {
    title: "Assassin Creed Origin",
    console: "PlayStation 4",
    rating: 7,
    price: 15.3,
  },

  {
    title: "Little Nightmare",
    console: "PlayStation 4",
    rating: 9,
    price: 16.0,
  },

  {
    title: "Among Us",
    console: "PlayStation 4",
    rating: 9,
    price: 11.7,
  },

  {
    title: "Green Hell",
    console: "PlayStation 5",
    rating: 9,
    price: 13.9,
  },
];

const state = () => {
  return games;
};

const mutations = {};

const actions = {};

const getters = {
  bestGames(state) {
    return state.filter(({ rating }) => {
      return rating === 9;
    });
  },

  playstationFour(state) {
    return state.filter(({ console }) => {
      return console === "PlayStation 4";
    });
  },

  playstationFive(state) {
    return state.filter(({ console }) => {
      return console === "PlayStation 5";
    });
  },

  consoleType(state) {
    return (consoleName) => {
      return state.filter(({ console }) => {
        return console === consoleName;
      });
    };
  },

  cheapGames(state) {
    return state.filter(({ price }) => {
      return price === 15.3;
    });
  },
};

export default { state, mutations, actions, getters };
