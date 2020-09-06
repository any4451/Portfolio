export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => (state.data = categories),
    ADD_CATEGORY: (state, category) => state.data.unshift(category),
    EDIT_CATEGORY: (state, category) => {
          return category
         
    },
    ADD_SKILL: (state, newSkill) => {
      state.data = state.data.map((category) => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }

        return category;
      });
    },
    REMOVE_SKILL: (state, removeSkill) => {
      state.data = state.data.map((category) => {
        if (category.id === removeSkill.category) {
          category.skills = category.skills.filter(
            (skill) => skill.id !== removeSkill.id
          );
        }

        return category;
      });
    },
    EDIT_SKILL: (state, editSkill) => {
      const editSkillInCategory = (category) => {
        category.skills = category.skills.map((skill) => {
          return skill.id === editSkill.id ? editSkill : skill;
        });
      };

      const findCategory = (category) => {
        if (category.id === editSkill.category) {
          editSkillInCategory(category);
        }

        return category;
      };

      state.data = state.data.map(findCategory);
    },
  },
  actions: {
    async edit(store, title) {
      try {
        const response = await this.$axios.post(`/categories/${title.id}`, title);
        store.commit("EDIT_CATEGORY", response.data);
      } catch (error ){
        console.log(error);
        throw new Error("Ошибка")
      }
    },
    async create(store, title) {
      try {
        const response = await this.$axios.post("/categories", {
          title: title,
        });
        store.commit("ADD_CATEGORY", response.data);
      } catch (error) {
        throw new Error("произошла ошибка");
      }
    },
    async fetch(store) {
      try {
        const response = await this.$axios.get("/categories/378");
        store.commit("SET_CATEGORIES", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    
  },
};
