<template>
  <div class="m-geo">
    <i class="el-icon-location" />
    <span>北京</span>
    <nuxt-link class="change-city"
               to="/changeCity">切换城市</nuxt-link>
    [廊坊 天津]
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
