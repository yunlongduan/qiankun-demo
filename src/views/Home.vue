<!--
 * @Author: 
 * @Date: 2022-02-09 16:40:57
 * @LastEditors: 
 * @LastEditTime: 2022-02-09 16:53:09
 * @Description: 
-->
<template>
  <div class="home">
    <div @click="router.push('/111')">点我控制台会连续打印2个demo</div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeRouteUpdate, useRouter } from 'vue-router';
const router = useRouter()
onBeforeRouteUpdate(() => {
  console.log('demo')
})
</script>
