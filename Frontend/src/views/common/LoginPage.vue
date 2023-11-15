<template>
  <div class="container">
    <div class="principal-container">
      <div class="information-container">
        <h1>Iniciar Sesión</h1>
        <h5>Por favor, a continuación, inicia sesión:</h5>
        <img
          src="../../components/images/USEI.png"
          alt="Unidad de Servicios Estudiantiles Integrales"
        />
      </div>
      <form class="form-container" @submit.prevent="login">
        <div class="form-item">
          <label class="form-label" for="idusuario">Usuario:</label>
          <input
            type="text"
            id="idusuario"
            class="form-control"
            placeholder="Ingresa tu usuario"
            :style="
              loginMessages.userIdErrorMessage
                ? 'border: 3px solid red;'
                : 'border: none;'
            "
            v-model="userData.idusuario"
          />
        </div>
        <div class="form-item">
          <label class="form-label" for="password">Contraseña:</label>
          <div class="password-input-container">
            <input
              :type="showPassword ? 'text' : 'password'"
              :style="
                loginMessages.passwordErrorMessage
                  ? 'border: 3px solid red;'
                  : 'border: none;'
              "
              id="password"
              class="form-control"
              placeholder="Ingresa tu contraseña"
              v-model="userData.password"
            />
            <input
              type="checkbox"
              name="showPasswordButton"
              class="showPasswordButton"
              v-if="userData.password !== ''"
              v-model="showPassword"
              @click="togglePasswordVisibility"
            />
          </div>
        </div>
        <div class="submit-container">
          <div class="message-container">
            <span
              class="submitMessage"
              v-text="loginMessages.loginMessage"
            ></span>
            <span v-if="loginMessages.manyAttempts"
              >Alcanzaste el limite de intentos para acceder a tu cuenta, espera
              {{ formattedTime }} minutos para volver a intentarlo.</span
            >
          </div>
          <Button
            text="Iniciar sesión"
            :color="3"
            :class="{ 'button-disabled': buttonDisabled }"
          ></Button>
        </div>
      </form>
      <div class="account-container">
        <p>¿Olvidaste tu contraseña?</p>
        <a href="/">¡Recupera tu cuenta!</a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
import { useLoginStore } from "@/store/common/loginStore";
export default {
  name: "LoginPage",
  components: {
    Button,
  },
  data() {
    return {
      userData: {
        idusuario: "",
        password: "",
      },
      attempts: 0,
      showPassword: false,
      buttonDisabled: false,
      timer: {
        minutes: 0,
        seconds: 0,
      },
      loginMessages: {
        loginMessage: "",
        manyAttempts: false,
        userIdErrorMessage: false,
        passwordErrorMessage: false,
      },
    };
  },
  methods: {
    login() {
      const userIdRegEx = /^[A-Za-z0-9-_.&]{5,}$/;
      const passwordRegEx = /^[A-Za-z0-9@#$-_.%^&*()!~?]{2,}$/;
      if (this.userData.idusuario === "") {
        this.loginMessages.userIdErrorMessage = true;
        this.loginMessages.loginMessage = "Ingresa tu usuario por favor.";
      } else if (!userIdRegEx.test(this.userData.idusuario)) {
        this.loginMessages.userIdErrorMessage = true;
        this.loginMessages.loginMessage =
          "Error, el usuario introducido es inválido.";
      } else if (this.userData.password === "") {
        this.loginMessages.userIdErrorMessage = false;
        this.loginMessages.passwordErrorMessage = true;
        this.loginMessages.loginMessage = "Ingresa tu contraseña por favor.";
      } else if (!passwordRegEx.test(this.userData.password)) {
        this.loginMessages.userIdErrorMessage = false;
        this.loginMessages.passwordErrorMessage = true;
        this.loginMessages.loginMessage =
          "Error, la contraseña introducida es inválida.";
      } else {
        this.loginMessages.userIdErrorMessage = false;
        this.loginMessages.passwordErrorMessage = false;
        this.attempts++;
        // Realiza la solicitud POST a la API
        fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.userData),
        })
          .then((response) => {
            if (response.ok) {
              // La solicitud fue exitosa
              console.log("Inicio de sesión exitoso");
              response.json().then((data) => {
                var result = data.result;
                $cookies.set("id", result.id);
                $cookies.set("username", result.username);
                $cookies.set("type", result.tipousuario.id);
                if (result.tipousuario.id == 1) {
                  useLoginStore().setLogin(1);
                  this.$router.push("/student/");
                } else if (result.tipousuario.id == 2) {
                  useLoginStore().setLogin(2);
                  this.$router.push("/institution/home");
                } else if (result.tipousuario.id == 3) {
                  useLoginStore().setLogin(3);
                  //this.$router.push("");
                } else {
                  useLoginStore().setLogin(0);
                }
              });
            } else if (this.attempts <= 2) {
              this.loginMessages.loginMessage =
                "Usuario o contraseña incorrectos, inténtalo nuevamente.";
              console.log("attempts: " + this.attempts);
              // La solicitud falló
              console.error("Inicio de sesión fallido");
            } else {
              console.error("¡Realizaste demasiados intentos!");
              this.timer.minutes = 3;
              this.loginMessages.loginMessage = "";
              this.buttonDisabled = true;
              this.loginMessages.manyAttempts = true;
              this.startTimer();
            }
          })
          .catch((error) => {
            console.error("Error de red: ", error);
          });
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    startTimer() {
      const totalSeconds = this.timer.minutes * 60 + this.timer.seconds;
      let remainingSeconds = totalSeconds;
      const timerInterval = setInterval(() => {
        if (remainingSeconds > 0) {
          remainingSeconds--;
          this.timer.minutes = Math.floor(remainingSeconds / 60);
          this.timer.seconds = remainingSeconds % 60;
        } else {
          clearInterval(timerInterval);
          this.loginMessages.manyAttempts = false;
          this.buttonDisabled = false;
          this.userData.idusuario = "";
          this.userData.password = "";
          this.attempts = 0;
        }
      }, 1000);
    },
  },
  computed: {
    formattedTime() {
      const min =
        this.timer.minutes < 10 ? `0${this.timer.minutes}` : this.timer.minutes;
      const sec =
        this.timer.seconds < 10 ? `0${this.timer.seconds}` : this.timer.seconds;
      return `${min}:${sec}`;
    },
  },
};
</script>

<style scoped>
img {
  width: 60%;
}

.container {
  padding: 5% 10%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("@/components/images/USEI.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.principal-container {
  background-color: #f8f7f7;
  width: 55%;
  padding: 7%;
  text-align: center;
  border-radius: 30px;
  border: 2px solid black;
  box-shadow: 15px 15px 55px;
}

.form-control {
  display: block;
  width: 100%;
  transition: 0.4s all ease;
}

.form-label {
  font-size: large;
}

.form-item {
  text-align: start;
  margin-bottom: 5%;
}

.form-container {
  margin-top: 5%;
  margin-bottom: 8%;
}

.account-container {
  display: flex;
  justify-content: space-between;
}

.message-container {
  color: red;
  margin-bottom: 5%;
  font-size: medium;
}

.button-disabled {
  display: none;
}

.password-input-container {
  position: relative;
}

.showPasswordButton {
  position: absolute;
  appearance: none;
  /* max-width: 7%; */
  /* max-height: 77%; */
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background-image: url("@/components/images/viewPassword.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
}

.showPasswordButton:checked {
  background-image: url("@/components/images/hidePassword.png");
}

@media screen and (max-width: 768px) {
  .principal-container {
    width: 95%;
  }

  /* .showPasswordButton {
    max-width: 15%;
    max-height: 55%;
    width: 15%;
    height: 55%;
  } */
}

/* DARK THEME */
.dark-theme img {
  filter: invert(20%) sepia(100%) saturate(100%) hue-rotate(220deg);
}

.dark-theme a {
  color: cyan;
}

.dark-theme .principal-container {
  background-color: #353e48;
  border: 2px solid white;
  box-shadow: 15px 15px 35px #8d8d8d;
}

.dark-theme .message-container {
  color: rgb(253, 97, 97);
}

.dark-theme .showPasswordButton {
  filter: invert(100%);
}
</style>