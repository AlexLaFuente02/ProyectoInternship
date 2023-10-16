<template >
    <div class="form__selection__user">
        <h1 >Selecciona el tipo de usuario</h1>
        <div class="form__selection__user__buttons">
            <button>Estudiante</button>
            <button>Docente</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.form__selection__user{
    display: flex;
    background-color: #ffffff;
    height: 100vh;
    flex-direction: column;
}
/*Estilos para que el titulo h1 este centrado en la parte superior*/
.form__selection__user h1{
    text-align: center;
    margin-top: -20%;
    font-size: 50px;
    font-weight: 700;
    color: #1b3039;
    /*Que este en la parte superior*/

}
/*Estilos para que los botones esten centrados en la parte central de la pantalla y tengan una linea alrededor*/
.form__selection__user__buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    border: 2px solid #1b3039;
}

    
</style>