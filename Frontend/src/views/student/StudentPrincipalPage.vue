<template>
    <div class="container__student">
        <h5>Student Principal Page</h5>
        <div class="dataview">
            <div class="dataview__title">
                <h3>Publicaciones:</h3>
                <Dropdown :options="options" />
            </div>
            <div class="dataview__options">
                <button class="List-view">
                    <font-awesome-icon :icon="['fas', 'list']" 
                    size="2xl"
                    />
                </button>
                <button class="Grid-view">
                    <font-awesome-icon :icon="['fas', 'th-large']" size="2xl"/>
                </button>
            </div>
        </div>
        <div class="container__cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
</template>
<script>
import Card from "@/components/common/Card.vue";
import Dropdown from "@/components/common/Dropdown.vue";
export default {
    data() {
        return {
            options: [
                { id: null, label: "Populares" },
                { id: "1", label: "Recien publicadas" },
                { id: "2", label: "Mejor calificadas" },
                { id: "3", label: "Peor calificadas" },
            ],
        };
    },
    components: {
        Card,
        Dropdown,
    },
}
</script>
<style scoped>
.container__student{
    margin-left: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 10%;
}
/*Modo oscuro*/
.dataview{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.dataview__title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem;

}
.dataview__title h3{
    padding: 0.5rem;
    font-size: 1.5rem;
}
.dataview__options{
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    margin-bottom: 1rem;
    
}
.dataview__options button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.5rem;
    color: #C8E6C9;
    transition: 0.4s all ease;
    border-radius: 5px;
    padding: 0.5rem;
}
.dataview__options button:hover{
    color: #434B54;
    background: #C8E6C9;
}
.container__cards{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
}
@media screen and (max-width: 768px){
    .container__student{
        padding: 5% 5%;
    }
    .dataview__title h3{
        font-size: 1.25rem;
    }
    .dataview__options button{
        font-size: 1.25rem;
    }
}


</style>