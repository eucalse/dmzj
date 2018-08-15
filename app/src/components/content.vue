<template>
  <div>
    <h1>{{comicList[comicIndex].title}}</h1>
    <img :src="comicList[comicIndex].img">
  </div>
</template>

<script>
export default {
  name: 'content',
  data: function () {
    return {
      comicList: []
    }
  },
  computed: {
    comicIndex: function () {
      return this.$store.state.index
    }
  },
  methods: {
    getList: function () {
      var _this = this
      this.$http.get('../../static/comic.json').then(response => {
        response.data.result.forEach(function (item) {
          _this.comicList.push({
            title: item.name,
            img: item.img
          })
        })
      })
    }
  },
  mounted: function () {
    this.getList()
  }
}
</script>
