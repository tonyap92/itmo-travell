import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const usePlaceStore = defineStore('places-store', {
  state: () => {
    return {
      places: [],
      searchCountry: '',
    }
  },
  getters: {
    searchPlaces() {
      let search = this.searchCountry
      return this.places.filter(function (elem) {
        if (search === '') return true
        else return elem.country.indexOf(search) > -1
      })
    },

    likedPlaces() {
      return this.places.filter((place) => place.liked)
    },

    item() {
      return (id) => this.places.find((place) => place.id === id)
    },
  },

  actions: {
    async fetchNewPlaces() {
      this.places = await fetch('/api/places').then((res) => res.json())
    },

    toggleLiked(id, force) {
      const item = this.item(id)
      console.log('toggleLiked', item)
      item.liked = force === undefined ? !item.liked : force
    },
  },
})
