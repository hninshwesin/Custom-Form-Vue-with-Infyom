<template>
    <template1 :database="database" @listenerChild="listenerChild"></template1>
</template>

<script>
    import template1 from "./template1";
    export default {
        name: "parentTemplate1",
        components: {template1},
        data(){
            return{
                selected1: '',
                selected2: '',
                selected3: '',
                selected4: '',
                selected5: '',
                selected6: '',
                categories: '',
                isHidden1: true,
                isHidden2: true,
                isHidden3: true,
                isHidden4: true,
                isHidden5: true,
                isHidden6: true,
                database: [
                    {
                        "name": "id",
                        "dbType": "increments",
                        "htmlType": null,
                        "validations": null,
                        "searchable": false,
                        "fillable": false,
                        "primary": true,
                        "inForm": false,
                        "inIndex": false,
                        "inView": false
                    },
                    {
                        "name": "name",
                        "dbType": "string",
                        "htmlType": "text",
                        "validations": "required",
                        "contentType": "email",
                        "searchable": true
                    },
                    {
                        "name": "price",
                        "dbType": "bigInteger",
                        "htmlType": "number",
                        "validations": "required",
                        "contentType": "url",
                        "searchable": true
                    },
                    {
                        "name": "description",
                        "dbType": "longText",
                        "htmlType": "text",
                        "validations": "required",
                        "contentType": "phone",
                        "searchable": true
                    },
                    {
                        "name": "created_at",
                        "dbType": "timestamp",
                        "htmlType": null,
                        "validations": null,
                        "searchable": false,
                        "fillable": false,
                        "primary": false,
                        "inForm": false,
                        "inIndex": false,
                        "inView": true
                    },
                    {
                        "name": "updated_at",
                        "dbType": "timestamp",
                        "htmlType": null,
                        "validations": null,
                        "searchable": false,
                        "fillable": false,
                        "primary": false,
                        "inForm": false,
                        "inIndex": false,
                        "inView": true
                    }
                ],
            }
        }

    }
</script>

<style scoped>

</style>