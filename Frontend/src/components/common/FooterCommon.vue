<template>
    <footer>
        <div class="container">
            <div class="content__footer">
                <div class="profil">
                    <div class="logo__area">
                        <font-awesome-icon :icon="['fas', 'earth-americas']" size="2x" style="color: #838b8e;" />
                        <span class="logo__name">Internship</span>
                    </div>
                    <div class="social_media">
                        <font-awesome-icon :icon="['fab', 'facebook']" style="color: #838b8e;" />
                        <font-awesome-icon :icon="['fab', 'tiktok']" style="color: #838b8e;" />
                        <font-awesome-icon :icon="['fab', 'instagram']" style="color: #838b8e;" />
                        <font-awesome-icon :icon="['fab', 'linkedin']" style="color: #838b8e;" />
                    </div>
                </div>
            </div>
            <hr>
            <div class="footer__bottom">
                <div class="copy__right">
                    <font-awesome-icon icon="fas-solid fa-registered" style="color: #838b8e;" />
                    <span>2023 Internship</span>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* Footer */
footer{
    background-color: #FDFEFF;
    box-shadow: 0 24px 64px -2px rgba(0, 0, 0, 0.02), 0 6px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -2px rgba(0, 0, 0, 0.08);
    padding: 50px 0;
    border-radius: 5px;
}

/*Modo oscuro*/
.dark-theme ::after footer{
    background-color: #515C66;
    box-shadow: 0 24px 64px -2px rgba(255, 255, 255, 0.02), 0 6px 16px -2px rgba(255, 255, 255, 0.06), 0 2px 6px -2px rgba(255, 255, 255, 0.08);
}
.footer__bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}


.copy__right{
    display: flex;
    align-items: center;
}
.copy__right span{
    margin-left: 10px;
}
.content__footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.profil{
    width: 30%;
}
.logo__area{
    display: flex;
    align-items: center;
}
.logo__name{
    font-size: 1.5rem;
    font-weight: 700;
    margin-left: 10px;
}
.social_media{
    margin-top: 20px;
}
.social_media a{
    margin-right: 20px;
}
@media screen and (max-width: 768px){
    .content__footer{
        flex-direction: column;
    }
    .profil{
        width: 100%;
    }
}

</style>