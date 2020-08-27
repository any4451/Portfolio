<template>
<div :class="['skillLine-component', {blocked: blocked}]">
    <div class="title">
        <app-input noSidePaddings />
    </div>
    <div class="percent">
        <app-input type="number" min="0" max="100" maxlength="3" />%
    </div>
    <div class="buttons">
        <iconed-btn type="iconed" title=""/>
    </div>
  </div>
</template>

<script>
import input from "../input/input";
import icon from "../icon/icon";
import iconedBtn from "../button/types/iconedBtn/iconedBtn";

export default {
    props: {
        blocked: Boolean
    },
  components: {
      appInput: input, 
      icon,
      iconedBtn
      
  },
 
}
</script>

<style lang="postcss">
.skillLine-component {
    display: flex;
    align-items: center;
    position: relative;
    &.blocked {
        filter: grayscale (1);
        pointer-events:none;
        &:after {
            content: "";
            position: absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
        }
    }
}

</style>