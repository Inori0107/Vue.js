<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center">
        <v-app-bar-title>番茄鐘</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-format-list-bulleted" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-cog" to="/settings">設定</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <!-- Component = 目前路由應該顯示的元件 亦即 當前頁面-->
      <router-view v-slot="{ Component }">
        <!-- keep-alive 保持被包住的原件不被銷毀 -->
        <!-- 使用 include 指定只有 index 不被銷毀 -->
        <keep-alive include="index">
          <!-- component vue 內建的動態元件
           使用 is = 定義取出的元件 => 可配合 v-for
           -->
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
</script>
