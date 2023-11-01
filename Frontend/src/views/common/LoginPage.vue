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
              userIdErrorMessage ? 'border: 3px solid red;' : 'border: none;'
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
                passwordErrorMessage
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
          <span class="submitMessage" v-text="loginMessage"></span>
          <Button text="Iniciar sesión" :color="3"></Button>
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
      showPassword: false,
      loginMessage: "",
      userIdErrorMessage: false,
      passwordErrorMessage: false,
    };
  },
  methods: {
    login() {
      const userIdRegEx = /^[A-Za-z0-9-_.&]{5,}$/;
      const passwordRegEx = /^[A-Za-z0-9@#$-_.%^&*()!~?]{2,}$/;
      if (this.userData.idusuario === "") {
        this.userIdErrorMessage = true;
        this.loginMessage = "Ingresa tu usuario por favor.";
      } else if (!userIdRegEx.test(this.userData.idusuario)) {
        this.userIdErrorMessage = true;
        this.loginMessage = "Error, el usuario introducido es inválido.";
      } else if (this.userData.password === "") {
        this.userIdErrorMessage = false;
        this.passwordErrorMessage = true;
        this.loginMessage = "Ingresa tu contraseña por favor.";
      } else if (!passwordRegEx.test(this.userData.password)) {
        this.userIdErrorMessage = false;
        this.passwordErrorMessage = true;
        this.loginMessage = "Error, la contraseña introducida es inválida.";
      } else {
        this.passwordErrorMessage = false;
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
              // La solicitud fue exitosa, puedes redirigir o realizar otras acciones
              console.log("Inicio de sesión exitoso");
              this.$router.push({ name: "PrincipalPage" });
            } else {
              // La solicitud falló, puedes manejar el error aquí
              console.error("Inicio de sesión fallido");
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
  },
};
</script>

<style scoped>
img {
  width: 260px;
}

.container {
  background-image: url("../../components/images/USEI.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.principal-container {
  background-color: #f8f7f7;
  padding: 7%;
  text-align: center;
  border-radius: 30px;
  border: 2px solid black;
  box-shadow: 15px 15px 15px;
}

input {
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

span {
  color: red;
  margin-bottom: 90%;
  /* font-size: 16em; */
}

.password-input-container {
  position: relative;
}

.showPasswordButton {
  position: absolute;
  appearance: none;
  width: 9%;
  height: 70%;
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
  box-shadow: 15px 15px 15px #8d8d8d;
}

.dark-theme .showPasswordButton {
  filter: invert(100%);
}
</style>
