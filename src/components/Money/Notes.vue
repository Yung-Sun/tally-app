<template>
    <div>
      <label class="notes">
        <span>备注</span>
        <input type="text" placeholder="在这里输入备注"/>
      </label>
    </div>
</template>

<script lang="ts">
export default {
name: "Notes"
}
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  font-size: 14px;
  background: #eee;
  padding: 0 16px;
  align-items: center;

  span {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}
</style>