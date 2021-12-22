<template>
  <v-row>
    <v-col xs4 v-for="game in playStationFourGames" :key="game.title">
      <v-card>
        <v-img :src="game.photo" aspect-ratio="1"></v-img>
        <v-card-title primary-title>
          <div>
            <h3>{{ game.title }}</h3>
            <h4>Rating: {{ game.rating }}</h4>
            <h4>Price: ${{ game.price }}</h4>
          </div>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "IndexPage",
  computed: {
    ...mapGetters({
      consoleType: "games/consoleType",
    }),
    playStationFourGames() {
      return this.consoleType("PlayStation 4")
    },
  },
}
</script>
