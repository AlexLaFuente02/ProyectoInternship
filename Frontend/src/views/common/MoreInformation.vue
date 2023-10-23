<template >
    <NavbarCommon/>
    <div class="container">
        <div class="MasInformacion">
        <h1>Más información sobre <br>Internship by Cato</h1>
        <p>¡Bienvenido a Internship by Cato, la Bolsa de Trabajo de la Universidad Católica Boliviana "San Pablo" - Sede La Paz! ¿Por qué elegirnos? Te lo explicamos a continuación.</p>
        <br>
    </div>
    <div class="ConexionOportunidades">
        <h1>Conexión y Oportunidades</h1>
        <p>En el mundo de las prácticas pre profesionales y pasantías no
curriculares, la conexión adecuada es esencial. En Internship by Cato,
te ofrecemos una plataforma que agiliza el proceso de publicación de
convocatorias, lo que signifca que puedes acceder a oportunidades
más rápido que nunca. Además, nuestras herramientas de orientación
personalizan las publicaciones para adaptarse a tus necesidades,
asegurando que encuentres las ofertas que te interesan.</p>
<br>

    </div>
    <div class="DatosUtiles">
        <h1>Datos Útiles para tu Futuro</h1>
        <p>Sabemos lo importante que es el seguimiento y la recopilación de
datos en tu camino académico y profesional. Internship by Cato te
permite registrar tu información de manera sencilla, lo que facilita la
posterior generación de reportes para tu desarrollo y crecimiento.</p>
<br>
    </div>
    <div class="ConexionOportunidades">
        <h1>More Information</h1>
        <p>Nuestra aplicación se basa en cinco actividades clave: registro de
datos, registro de convocatorias, aprobación de convocatorias,
respuesta a convocatorias y generación de reportes. Estas actividades
interactúan en tres procesos fundamentales, cada uno con su
propósito y tiempo de acción defnidos.
<ul><li>Proceso de Registro: Ya seas estudiante, graduado o una
institución, nuestro proceso de registro te permite ingresar tus
datos de manera efciente, incluyendo información vital como
nombre, identifcación, contacto y más.</li>
 <li>Proceso Process: En este proceso, instituciones, la USEI y
estudiantes colaboran para crear y gestionar convocatorias de
manera efectiva. Desde la redacción hasta la aprobación y la
respuesta, nuestro aplicativo simplifca cada paso.</li>
 <li>Proceso OUT: Genera informes detallados que proporcionan
información valiosa tanto sobre los participantes como sobre las
convocatorias. Estos informes están diseñados para ser
accesibles y útiles para las autoridades y administrativos de la
universidad.</li></ul></p>
<br>

    </div>
    <div class="Contacto">
        <h1>Contacto y Soporte</h1>
        <p>Para cualquier consulta o asistencia, no dudes en ponerte en contacto con la Unidad de Servicios Estudiantiles Integrales (USEI). Aquí tienes sus datos de contacto:
Unidad de Servicios Estudiantiles Integrales
	Bloque N, Subsuelo – Lado Unidad de Recursos Humanos
	Teléfono: 2782222 Interno 2723
	Directo: 2692723
	Celular: 76521445
En Internship by Cato, estamos comprometidos con brindarte las herramientas necesarias para impulsar tu futuro profesional. Únete a nosotros y descubre un mundo de oportunidades. ¡Comienza ahora!</p>
<br>

    </div>

    </div>
   
    <FooterCommon/>
</template>
<script>
import FooterCommon from '@/components/common/FooterCommon.vue'
import NavbarCommon from '@/components/common/NavbarCommon.vue'

export default {
    components: {
        FooterCommon,
        NavbarCommon,
    },    
}
</script>
<style scoped>

.container{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10%;
    padding-top: 2rem;
}
    
</style>