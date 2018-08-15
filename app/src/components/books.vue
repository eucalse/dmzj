<template>
  <transition name="slide-fade">
    <div class="pane">
      <h1>{{ msg }}</h1>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'books',
  data: function () {
    return {
      msg: 'this is book page'
    }
  }
}
</script>
