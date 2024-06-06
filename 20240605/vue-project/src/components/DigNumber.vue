<template>
<svg version="1.1" class="number" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="178.102px" height="368.613px" viewBox="0 0 178.102 368.613" enable-background="new 0 0 178.102 368.613"
	 xml:space="preserve">
    <rect class="number-A" :class="{ active: '02356789'.includes(data) }" x="13.503" y="1.459" fill="#E60012" stroke="#231815" stroke-miterlimit="10" width="151.095" height="13.139"/>
    <rect class="number-B" :class="{ active: '045689'.includes(data) }" x="1.096" y="24.415" fill="#E60012" stroke="#231815" stroke-miterlimit="10" width="13.139" height="151.095"/>
    <rect class="number-C" :class="{ active: '01234789'.includes(data) }" x="164.963" y="22.792" fill="#E60012" stroke="#231815" stroke-miterlimit="10" width="13.139" height="151.095"/>
    <rect class="number-D" :class="{ active: '2345689'.includes(data) }" x="13.502" y="178.227" fill="#E60012" stroke="#231815" stroke-miterlimit="10" width="151.095" height="13.139"/>
    <rect class="number-E" :class="{ active: '0268'.includes(data) }" x="0.812" y="193.862" fill="#E60012" stroke="#231815" stroke-miterlimit="10" width="13.139" height="151.059"/>
    <rect class="number-F" :class="{ active: '013456789'.includes(data) }" x="164.68" y="194.634" fill="#E60012" stroke="#231815" stroke-miterlimit="10" width="13.139" height="151.058"/>
    <rect class="number-G" :class="{ active: '0235689'.includes(data) }" x="13.503" y="355.024" fill="#E60012" stroke="#231815" stroke-miterlimit="10" width="151.095" height="13.139"/>
</svg>
</template>

<script setup>
// 設定 setup
    // export default(){
    //     props
    // }
defineProps(['data'])
</script>

<style scoped lang="sass">
.number
    margin: 10px
rect
    fill: transparent
    &.active
        fill: #E60012
</style>