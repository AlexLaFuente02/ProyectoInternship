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
                    :class="{'selected': getMode, 'not-selected': !getMode}"
                    @click="toggleView(true)"
                    ><font-awesome-icon :icon="['fas', 'list']" size="2xl"/></button>
                    <button class="Grid-view"
                    :class="{'selected': !getMode, 'not-selected': getMode}"
                    @click="toggleView(false)"
                    ><font-awesome-icon :icon="['fas', 'th-large']" size="2xl"/></button>
                </div>
            </div>
        </div>
        <div class="containerList__cards__modeLIST" v-show="getMode">
            <CardModeList v-for="internship in listInterships" :key="internship.id" :internship="internship" />
        </div>
        <div class="containerList__cards__modeGRID" v-show="!getMode">
            
            <Card v-for="internship in listInterships" :key="internship.id" :internship="internship" />
        </div>
    </div>
</template>
<script>
import Card from "@/components/common/Card.vue";
import CardModeList from "@/components/common/CardModeList.vue";
import { useModeViewStore } from '@/store/common/modeViewListStore';
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
        },
        toggleView(value){
            if(this.mode !== value){
                useModeViewStore().toggleMode();
                this.mode = useModeViewStore().modeView;
            }
        },
        loadModeView(){
            useModeViewStore().loadMode();
            this.mode = useModeViewStore().modeView;
        }
    },
    created(){
        this.loadModeView();
        this.getData();
    },
    computed: {
        getMode(){
            return useModeViewStore().modeView;
        }
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
}
.toggle__view button{
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.3rem;
    border: 1px solid #D7D8D9;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.toggle__view button.selected{
    background-color: #4D9FDC;
    color: #fff;
}
.toggle__view button.selected:hover{
    background-color: #135AA9;
}
.toggle__view button.not-selected:hover{
    background-color: #D7D8D9;
}
.toggle__view button.not-selected{
    background-color: transparent;
}
.List-view{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}
.Grid-view{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
.search__view{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.search__view button{
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0 0.5rem;
}
.search__view button:hover{
    color: #4D9FDC;
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
    width: 100%;
    flex-wrap: wrap;
}
/*Media Queries*/
@media screen and (max-width: 825px){
    .containerList__header{
        flex-direction: column;
    }
    .containerList__title{
        margin-bottom: 1rem;
    }
    .dataview__options{
        flex-direction: column;
    }
    .toggle__view{
        margin-bottom: 1rem;
    }
    .search__view{
        margin-bottom: 1rem;
    }
    input{
        font-size: 0.8rem;
    }
    button{
        font-size: 0.8rem;
    }
    h1{
        margin: 1.2rem 0 0.8rem 0;
    }
}
/*Media Queries*/
@media screen and (max-width: 480px){
    input{
        font-size: 0.5rem;
    }
    button{
        font-size: 0.5rem;
    }
    h1{
        margin: 0.8rem 0 0.5rem 0;
    }
}


</style>