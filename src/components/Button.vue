<template>

  <button class="button" @click="$emit('click', $event)">
    <slot/>
  </button>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>

.button {
  border: none;
  height: 40px;
  padding: 0 16px;
  background: #FF4D42;
  color: white;
  box-shadow: 3px 3px 7px -1px #FFFFFF, -5px -5px 7px -5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
</style>