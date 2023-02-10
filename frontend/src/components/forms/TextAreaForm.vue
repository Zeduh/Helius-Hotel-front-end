<template>
    <label :for="classInput">
        <p>{{labelTitle}}</p>
        <textarea :class="classTxtArea" :cols="column" :rows="rows" :placeholder="placeHolder"></textarea>
    </label>
</template>

<script>
export default {
    name: "inputForm",
    props: {
        classTxtArea: {
            type: String,
            default: "inputForm"
        },
        labelTitle: {
            type: String
        },
        column: {
            type: [String,Number]
        },
        rows: {
            type: [String,Number]
        },
        placeHolder: {
            type: String
        }
    }
}
</script>

<style>

</style>