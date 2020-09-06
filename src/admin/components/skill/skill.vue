<template>
  <div class="skill-component" v-if="currentSkill.editmode === false">
    <div class="title">{{skill.title}}</div>
    <div class="percent">{{skill.percent}} %</div>
    <div class="buttons">
        <icon symbol="pencil" class="btn" grayscale @click="currentSkill.editmode = true"/>
        <icon symbol="trash" class="btn" grayscale @click="$emit('remove', currentSkill)" />
    </div>
  </div>
  <div class="skill-component" v-else>
    <div class="title">
        <app-input noSidePaddings v-model="currentSkill.title"/>
    </div>
    <div class="percent">
        <app-input type="number" min="0" max="100" maxlength="3" v-model="currentSkill.percent" />%
    </div>
    <div class="buttons">
        <icon symbol="tick" class="btn" @click="$emit('approve', currentSkill)"/>
        <icon symbol="cross" class="btn" @click="currentSkill.editmode = false"/>
    </div>
  </div>
</template>

<script>
import input from "../input/input";
import icon from "../icon/icon";
export default {
    props: {
        skill: {
            type: Object,
            default: () => {},
            required: true
        }
    },
  components: {
      appInput: input, 
      icon
      
  },
  data() {
      return {
          
          currentSkill: {
              id: this.skill.id,
              title: this.skill.title,
              percent: this.skill.percent,
              category:this.skill.category,
              editmode: false,

          }
      }
  }
}
</script>

<style lang="postcss" src="./skill.pcss"></style>