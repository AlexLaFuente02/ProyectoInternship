<template >
    <div class="container__student__internships">
        <div class="containerList__header">
            <div class="containerList__title">
                <h1>Pasantías</h1>
            </div>
    </div>
        <div class="content__internship">
            <CardList 
            :list="listInterships"
            :title="title"
            v-if="everyInternshipsAreLoaded"
            />
        </div>
    </div>
</template>
<script>
import {useInternshipsByIDStore } from "@/store/student/internshipsByIDStore";
import CardList from "@/components/common/CardList.vue";
import {useLoaderStore} from "@/store/common/loaderStore";
export default {
    name: "StudentInternships",
    components: {
        CardList
    },
    data() {
        return {
            listInterships: [],
            title: "Pasantías",
            everyInternshipsAreLoaded: false
        }
    },
    methods: {
        async getInternships() {
            await useInternshipsByIDStore().loadInternshipsByIdStudent();
            this.listInterships = useInternshipsByIDStore().internships;
            this.everyInternshipsAreLoaded = true;
        }
    },
    async mounted() {
        useLoaderStore().activateLoader();
        await this.getInternships();
        useLoaderStore().desactivateLoader();
    }
    
}
</script>
<style scoped>
.container__student__internships{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}
.containerList__header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
.dark-theme .containerList__header{
    background-color: #434B54;
}
.containerList__title{
    display: flex;
    margin-bottom: 1rem;
}
.dataview__options{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.search__view{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.search__image{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 0.2rem;
}
</style>