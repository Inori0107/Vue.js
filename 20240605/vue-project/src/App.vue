<template lang="pug">
TopImage
#left
    TeamMenu
#right
    DigNumber(data="0")
    DigNumber(data="1")
    DigNumber(data="2")
    DigNumber(data="3")
    DigNumber(data="4")
    DigNumber(data="5")
    DigNumber(data="6")
    DigNumber(data="7")
    DigNumber(data="8")
    DigNumber(data="9")
</template>

<!-- 直接設定 setup 會自動判定 return -->
<script setup>
import TopImage from './components/TopImage.vue'
import TeamMenu from './components/TeamMenu.vue'
import DigNumber from './components/DigNumber.vue'
</script>

<!-- 設定 scope 讓樣式不污染其他檔案 -->
<style scoped lang="sass">
#left
    width: 215px
    height: calc(768px - 20px - 65px)
    float: left

#right
    width: 770px
    height: calc(768px - 20px - 65px)
    float: right

#footer
    width: 1000px
</style>
