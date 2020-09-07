export default  {
    namespaced: true,
    actions: {
        async add({commit}, skill) {
            try {
                const { data } = await this.$axios.post('/skills', skill);
                commit('categories/ADD_SKILL', data, {root: true})
            } catch (error) {
                console.log(error);
                throw new Error("Ошибка")
            }
        },
        async remove({commit}, removeSkill) {
            try {
                const { data } = await this.$axios.delete(`/skills/${removeSkill.id}`);
                commit('categories/REMOVE_SKILL', removeSkill, {root: true})
            } catch (error) {
                console.log(error);
                throw new Error("Ошибка")
            }
        },
        async edit({commit}, editSkill) {
            try {
                const { data } = await this.$axios.post(`/skills/${editSkill.id}`, editSkill);
                commit('categories/EDIT_SKILL', data.skill, {root: true})
            } catch (error) {
                console.log(error);
                throw new Error("Ошибка")
            }
        },
    }
}