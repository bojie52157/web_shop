<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {reqFoodTypes} from './api'
export default {

  mounted(){
    reqFoodTypes().then(Response => {
      console.log(Response.data)
    })
  },
  components : { //components 局部注册组件，注册后只能在当页调用
    FooterGuide
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>

</style>


