<template>
<div class="about-page-component">
   
    <div class="page-content">
      <div class="container" v-if="categories.length">
        <div class="header">
          <div class="title-main"> Блок «Обо мне» </div>
          <iconed-btn type="iconed" @click="emptyCatIsShown = true" v-if="emptyCatIsShown === false" title="Добавить группу" />
        </div>
        <ul class="skills">
          <li class="item" v-if="emptyCatIsShown">
            <category 
            empty 
            @remove="emptyCatIsShown = false"
            @approve="createCategory"
            />
          </li>
          <li class="item" v-for="category in categories" :key="category.id">
            <category 
            :title="category.category" 
            :skills="category.skills"
            @create-skill="createSkill($event, category.id)"
            @edit-skill="editSkill"
            @remove-skill="removeSkill"
            @approve="editCategory"
            />
          </li>
        </ul>
      </div>
      <div class="container" v-else>
        loading...
      </div>
    </div>
</div>
</template>

<script>


import iconedBtn from "../../components/button/types/iconedBtn/iconedBtn";
import category from "../../components/category/category";
import { mapActions, mapState } from "vuex";

export default {
  components: {
     iconedBtn,
     category
    },
    data() {
      return {
        emptyCatIsShown: false
      }
    },
    created() {
      this.fetchCategoryAction();
    },
    computed: {
      ...mapState("categories", {
        categories: state => state.data 
      })
    },
    methods: {
      ...mapActions ({
        editCategoryAction: "categories/edit",
        createCategoryAction: "categories/create",
        fetchCategoryAction: "categories/fetch",
        addSkillAction: "skills/add",
        removeSkillAction: "skills/remove",
        editSkillAction: "skills/edit",
        
      }),
      async createCategory(categoryTitle) {
        try {
          await this.createCategoryAction(categoryTitle);
          this.emptyCatIsShown = false;
        } catch (error) {
          console.log(error.message);
        }
      },
     async createSkill(skill, categoryId) {
        const newSkill = {
          ...skill,
          category: categoryId
        }
       await this.addSkillAction(newSkill);

       skill.title = "";
       skill.percent = "";
      },
      removeSkill(skill) {
        this.removeSkillAction(skill);
      },
     async editSkill(skill) {
      await this.editSkillAction(skill);
      skill.editmode = false;
    },
    async editCategory (categoryTitle) {
      await this.editCategoryAction(categoryTitle);
      this.editmode = false;
    }
  },
}
</script>

<style lang="postcss" scoped src="./about.pcss">

</style>