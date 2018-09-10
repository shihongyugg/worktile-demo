<template>
	<div>
        全局{{id}}
    </div>
</template>

<script>
    export default {
        name: "quanju",
        data(){
            return{
                id:''
            }
        },
        created() {
            this.id=this.$route.params.id;
        },
    }
</script>

<style scoped>

</style>