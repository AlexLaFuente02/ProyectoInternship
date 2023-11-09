<template>
    <div class="containerList">
        <div class="containerList__header">
            <div class="containerList__title">
                <h1>{{this.title}}</h1>
            </div>
            <div class="dataview__options">
                <div class="search__view">
                    <input type="text" placeholder="Buscar" />
                    <button><font-awesome-icon :icon="['fas', 'search']" size="2xl"/></button>
                </div>
                <div class="toggle__view">
                    <button class="List-view"
                    :class="{'selected': this.mode, 'not-selected': !this.mode}"
                    @click="this.mode = !this.mode"
                    ><font-awesome-icon :icon="['fas', 'list']" size="2xl"/></button>
                    <button class="Grid-view"
                    :class="{'selected': !this.mode, 'not-selected': this.mode}"
                    @click="this.mode = !this.mode"
                    ><font-awesome-icon :icon="['fas', 'th-large']" size="2xl"/></button>
                </div>
            </div>
        </div>
        <div class="containerList__cards__modeGRID" v-show="this.mode">
            <CardModeList v-for="internship in listInterships" :key="internship.id" :internship="internship" />
        </div>
        <div class="containerList__cards__modeLIST" v-show="!this.mode">
            
            <Card v-for="internship in listInterships" :key="internship.id" :internship="internship" />
        </div>
    </div>
</template>
<script>
import Card from "@/components/common/Card.vue";
import CardModeList from "@/components/common/CardModeList.vue";
export default {
    data() {
        return {
            listInterships:[],
            mode: true,
            titleList: "Pasantías",
        };
    },
    components: {
        Card,
        CardModeList,
    },
    props: {
        list: {
            type: Object,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        getData(){
            this.listInterships = this.list.result;
            this.titleList =  this.title;
        }
    },
    created(){
        this.getData();
    },
}
</script>
<style scoped>
.containerList{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    
}
.dark-theme .containerList{
    background-color: #434B54;
}
.containerList__header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
.containerList__title{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
}
.containerList__title h1{
    font-weight: 600;
}
.dataview__options{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
.toggle__view{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #5B646D;
}
.toggle__view button{
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    padding: 0.3rem;
    
}
.toggle__view button.selected{
    background-color: #4D9FDC;
}
.toggle__view button:hover{
    color: #C8E6C9;
}
.toggle__view button.not-selected{
    background-color: transparent;
}


.search__view{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.search__view input{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: #ffffff99;
    color: #434B54;
    font-weight: 500;
    font-size: 1rem;
}
.search__view input::placeholder{
    color: #434B54;
}
.search__view button{
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0 0.5rem;
}
.search__view button:hover{
    color: #C8E6C9;
}
.containerList__cards__modeGRID{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
}
.containerList__cards__modeLIST{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

</style>