<template>
        <td>
            <button class="btn btn-danger" @click="replyDelete">Delete</button>
        </td>

</template>

<script>
    export default {
        name: "DeleteChildList",
        props: ['id'],
        methods: {
            replyDelete: function () {
                console.log('hello')
                console.log(this.id)
                this.$emit('listenerChildList', this.id)
            }
        },
    }
</script>

<style scoped>

</style>