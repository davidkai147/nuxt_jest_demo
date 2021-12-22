import _ from "lodash";
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";

describe("store/games", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let NuxtStore;
  let store;

  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`;
    NuxtStore = await import(storePath);
  });

  beforeEach(async () => {
    store = await NuxtStore.createStore();
  });

  describe("consoleType", () => {
    let playstationFour;

    beforeEach(() => {
      playstationFour = store.getters["games/playstationFour"];
    });

    test("Little Nightmare should be on only playStation 4", () => {
      expect(playstationFour).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            console: "PlayStation 4",
            title: "Little Nightmare",
          }),
        ])
      );
    });
  });

  describe("cheapGames", () => {
    let cheapGames;

    beforeEach(() => {
      cheapGames = store.getters["games/cheapGames"];
    });

    test(`Assassin Creed Origin ${15.3}`, () => {
      expect(cheapGames).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            price: 15.3,
          }),
        ])
      );
    });
  });

  describe("bestGames", () => {
    let bestGames;

    beforeEach(() => {
      bestGames = store.getters["games/bestGames"];
    });

    test("Display only the best titles we have", () => {
      expect(bestGames).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            rating: 9,
          }),
        ])
      );
    });
  });
});
