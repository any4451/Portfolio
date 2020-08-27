<template>
  <div :class="['tag', {interactive: interactive}]">
  <span> {{title}} </span>
  <button 
  v-if="interactive" 
  class="remove" 
  type="button"
  v-on="$listeners"
  >

  </button>
  </div>
</template>

<script>
import icon from "../icon/icon";
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    interactive: Boolean,
  },
  components: {
    icon
  }
}
</script>

<style lang="postcss" scoped src="./tag.pcss"></style>