<template>
  <div class="pane">
    <div id="carousel">
      <Carousel v-model="carValue" autoplay loop>
        <CarouselItem>
          <img :src="this.themeList[0].img">
        </CarouselItem>
        <CarouselItem>
          <img :src="this.themeList[1].img">
        </CarouselItem>
        <CarouselItem>
          <img :src="this.themeList[2].img">
        </CarouselItem>
      </Carousel>
    </div>
    <Divider orientation="left">最近更新</Divider>
    <div class="items row">
      <div class="col-xs-4" @click="content(0)">
        <router-link to="/content"><img :src="this.comicList[0].img" class="comic-img"></router-link>
        <label>{{ comicName(0) }}</label>
      </div>
      <div class="col-xs-4" @click="content(1)">
        <router-link to="/content"><img :src="this.comicList[1].img" class="comic-img"></router-link>
        <label>{{ comicName(1) }}</label>
      </div>
      <div class="col-xs-4" @click="content(2)">
        <router-link to="/content"><img :src="this.comicList[2].img" class="comic-img"></router-link>
        <label>{{ comicName(2) }}</label>
      </div>
    </div>
    <Divider orientation="left">近期必看</Divider>
    <div class="items row">
        <div class="col-xs-4" @click="content(3)">
          <router-link to="/content"><img :src="this.comicList[3].img" class="comic-img"></router-link>
          <label>{{ comicName(3) }}</label>
        </div>
        <div class="col-xs-4" @click="content(4)">
          <router-link to="/content"><img :src="this.comicList[4].img" class="comic-img"></router-link>
          <label>{{ comicName(4) }}</label>
        </div>
        <div class="col-xs-4" @click="content(5)">
         <router-link to="/content"> <img :src="this.comicList[5].img" class="comic-img"></router-link>
          <label>{{ comicName(5) }}</label>
        </div></div>
    <Divider orientation="left">火热专题</Divider>
    <div class="items"></div>
    <Divider orientation="left">猜你喜欢</Divider>
    <div class="items"></div>
  </div>
</template>

<script>
export default {
  name: 'comics',
  data: function () {
    return {
      msg: 'this is comic page',
      comicList: [],
      themeList: [],
      carValue: 0
    }
  },
  computed: {},
  methods: {
    // 获取漫画列表
    getList: function () {
      var _this = this
      this.$http.get('../../static/comic.json').then(
        response => {
          response.data.result.forEach(function (item) {
            _this.comicList.push({
              name: item.name,
              img: item.img,
              id: item.id
            })
          })
        },
        response => {
          alert('error')
        }
      )
      this.$http.get('../../static/theme.json').then(
        response => {
          response.data.result.forEach(function (item) {
            _this.themeList.push({
              title: item.title,
              img: item.img
            })
          })
        },
        response => {
          alert('error')
        }
      )
    },
    content: function (index) {
      this.$store.commit('getContent', index)
    },
    comicName: function (index) {
      var _name = this.comicList[index].name
      return _name.length > 5 ? _name.substr(0, 5) + '...' : _name
    }
  },

  mounted: function () {
    this.getList()
  }
}
</script>

<style>
.items:after {
  content: '';
  display: block;
  width: 100%;
  height: 7px;
  background-color: #f5f5f5;
  margin-top: 10px;
}
.items {
  padding: 20px;
  padding-top: 0;
  display: block;
}
.comic-img {
  height: auto;
  width: auto;
  max-width: 80px;
}
.row {
  margin: 0;
}
.items > .col-xs-4 {
  padding: 0px;
}
</style>
