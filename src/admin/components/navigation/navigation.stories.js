import navigation from "./navigation.vue";

export default {
    title: "navigation",
    components: { navigation }
  };

  export const defaultView = () => ({
    components: { navigation},
    template: `
    <navigation title="navigation" /> `
});

defaultView.story = {
    name: "Default View"
}