import Vue from 'vue'

Vue.mixin({
  methods: {
    convertToRgba(category) {
      const hex = category?.color || 'cccccc'

      const rgbHex = hex.match(/.{1,2}/g)

      const rgb = [
        parseInt(rgbHex[0], 16),
        parseInt(rgbHex[1], 16),
        parseInt(rgbHex[2], 16),
      ]

      return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.5)`
    },
  },
})
