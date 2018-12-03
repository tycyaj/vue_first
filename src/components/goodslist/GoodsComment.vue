<template>
    <div class="content">
        <cmtbox :id="$route.params.id"></cmtbox>
    </div>
</template>

<script>
import cmtbox from "../subcomponents/comment.vue";
export default {
    components:{
        cmtbox
    }
}
</script>

<style lang="scss" scoped>
.content{
    padding: 8px;
}
</style>
