<template>
    <div class="container__field">
        <label>{{title}}</label>
        <input :placeholder="placeholder" v-model="inputValue" :type="type" class="form-control">
    </div>
</template>
<script>
export default{
    props:{
        title:{
            type: String,
            default: 'Titulo'
        },
        placeholder:{
            type: String,
            default: 'Placeholder'
        },
        type:{
            type: String,
            default: 'text'
        }
    },
    data(){
        return{
            inputValue: ''
        }
    }
}
</script>
<style scoped>
.container__field{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
.container__field label{
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 5px;
}
input{
    border-radius: 5px;
    border: 1px solid #ced4da;
    padding: 5px;
    width: 100%;
    margin-bottom: 10px;  
}    

</style>