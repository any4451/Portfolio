import category from "./category.vue";
import {action} from "@storybook/addon-actions";

const methods = {
  onRemove: action("onRemove"),
  onRemoveSkill: action("onRemoveSkill"),
  onEditSkill: action("onEditSkill"),
};

export default {
    title: "category",
    components: { category }
  };

const skills = [
  {id:0, title: "HTML", percent: 85 },
  {id:1, title: "CSS3", percent: 75}
];

  export const defaultView = () => ({
    components: { category},
    data() {
      return {
        title:"Frontend",
        skills
      }
    },
    template: `
    <category :title="title" :skills="skills"  @remove-skill="onRemoveSkill" @edit-skill="onEditSkill" /> `,
    methods
});

