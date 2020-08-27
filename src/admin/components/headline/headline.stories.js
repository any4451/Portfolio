import headline from "./headline.vue";
import { action } from "@storybook/addon-actions";

const methods = {
    onChange: action("onChange")
}

export default {
    title: "headline",
    components: {headline}
};

export const defaultView = () => ({
    components: { headline},
    template: `
    <headline @change="onChange" title="Панель администрирования">
    </headline>  `,
    methods
});

defaultView.story = {
    name: "Стандартный вид"
}
