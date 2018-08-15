import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import comics from '@/components/comics'
import books from '@/components/books'
import news from '@/components/news'
import content from '@/components/content'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [{
    path: '/',
    name: 'comics',
    component: comics
  },
  {
    path: '/comics',
    name: 'comics',
    component: comics
  },
  {
    path: '/books',
    name: 'books',
    component: books
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
  {
    path: '/content',
    name: 'content',
    component: content
  }
  ]
})
