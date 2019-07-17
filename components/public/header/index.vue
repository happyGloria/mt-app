<template>
  <el-row class="m-header"
          :gutter="15">
    <el-col :span="10">
      <div class="grid-content bg-purple" />
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple" />
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple" />
    </el-col>
  </el-row>
</template>

<script>
import Geo from './geo.vue'
export default {
  components: {
    Geo
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/public/layout.scss';
</style>
