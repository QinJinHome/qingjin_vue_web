<template>
    <h1 @click="click">{{name}}</h1>
    <h2>测试</h2>
</template>
<script setup lang="ts">
import { ref } from 'vue';
let name = ref('zhaotong');

let click = () => {
    name.value = '刘慧丽'
}
</script>