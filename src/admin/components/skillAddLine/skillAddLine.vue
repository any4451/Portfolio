<template>
<div :class="['skillLine-component', {blocked: blocked}]">
    <div class="title">
        <app-input noSidePaddings 
        v-model="skill.title"
        :errorMessage="validation.firstError('skill.title')"
        />
    </div>
    <div class="percent">
        <app-input  
        v-model="skill.percent" 
        type="number" min="0" max="100" maxlength="3"
        :errorMessage="validation.firstError('skill.percent')"
         />%
    </div>
    <div class="buttons">
        <round-btn 
        type="round"
        @click="handleClick" />
    </div>
  </div>
</template>

<script>
import input from "../input/input";
import icon from "../icon/icon";
import roundBtn from "../button/types/roundBtn/roundBtn";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
    mixins: [ValidatorMixin],
    validators: {
        "skill.title"(value) {
        return Validator.value(value).required("Не может быть пустым");
        },
        "skill.percent"(value) {
        return Validator.value(value)
            .integer("Должно быть числом")
            .between(0, 100, "Некорректное значение")
            .required("Не может быть пустым");
        },
    },
    props: {
        blocked: Boolean
    },
  components: {
      appInput: input, 
      icon,
      roundBtn
      
  },
  data() {
      return {
          skill: {
              title: "",
              percent: ""
          }
      }
  },
  methods: {
      async handleClick() {
          if( await this.$validate() === false) return;
          this.$emit('approve', this.skill);
      }
  }
 
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