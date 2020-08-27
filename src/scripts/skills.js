import Vue from "vue";
 
const skill = {
    template: "#skill",
    props:["skill"],
    methods: {
         drawPercentageCircle() {
            const circle = this.$refs['colored-circle'];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue('stroke-dasharray')
            );
            const percent = (dashArray / 100) * (100 - this.skill.percent);
    
            circle.style.strokeDashoffset = percent;
         }
    },
    mounted() {
        this.drawPercentageCircle();
    }
}

const skillsRow = {
    template: "#skills-row",
    components: {
        skill,
    },
    props:["category"]
}


new Vue ({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsRow,
    },
    data() {
      return {
          skills: []
      }
    },
    created() {
      this.skills = require("../data/skills.json");
    }
});