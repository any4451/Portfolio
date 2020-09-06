<template>
    <div class="header-component">
        <headline title ="Панель администрирования">
            <user />
        </headline>
        <navigation />
    </div>
</template>
<script>
import headline from "../headline/headline";
import user from "../user/user";
import navigation from "../navigation/navigation";



export default {
    data: () => ({}),
    components: {
        headline,
        user,
        navigation
    }
}
</script>