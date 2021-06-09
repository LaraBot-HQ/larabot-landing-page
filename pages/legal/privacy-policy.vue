<template>
  <div class="container">
    <div class="content">
      <div class="content-info">
        <a href="/">
          <img class="logo" src="/images/logo.png" alt="LaraBot Logo" />
        </a>

        <h2>POLÍTICA DE PRIVACIDAD de el club del Artista</h2>

        <p>Última modificación: 27 de febrero de 2021</p>
        <p>El respeto a tu privacidad está totalmente garantizado.</p>

        <ol>
          <li>
            La aplicación no guarda información relativa a tu dispositivo como,
            por ejemplo, fallos, actividad del sistema, ajustes del hardware,
            tipo de navegador, idioma del navegador.
          </li>
          <li>La aplicación no accede a tus contactos ni agendas.</li>
          <li>
            <strong>Clasificación por edades:</strong>
            PEGI 3 - Apto para todos los públicos.
          </li>
          <li>
            <strong>Cargos y cuotas:</strong>
            Cualquier uso de esta aplicación es totalmente gratuito.
          </li>
          <li>
            <strong>Cambios en nuestra Política de Privacidad:</strong>
            Nuestra Política de Privacidad puede cambiar de vez en cuando.
            Publicaremos cualquier cambio de política de privacidad en esta
            página, por lo que debe revisarla periódicamente.
          </li>
          <li>
            La aplicación utiliza el permiso de CAMERA, para permitir a los
            artistas la publicación manual de sus obras.
          </li>
        </ol>

        <br />
        <br />

        <h2>PRIVACY POLICY of the Artist's club</h2>

        <p>Last modified: February 27, 2021</p>
        <p>Respect for your privacy is fully guaranteed.</p>

        <ol>
          <li>
            The application does not save information related to your device
            such as failures, system activity, hardware settings, browser type,
            browser language.
          </li>
          <li>The application does not access your contacts or agendas.</li>
          <li>
            <strong>Age rating:</strong>
            PEGI 3 - Suitable for all audiences
          </li>
          <li>
            <strong>Charges and fees:</strong>
            Any use of this application is completely free.
          </li>
          <li>
            <strong>Changes to our Privacy Policy:</strong>
            Our Privacy Policy may change from time to time. We will post any
            privacy policy changes on this page, so please check back
            periodically.
          </li>
          <li>
            The application uses the permission of CAMERA, to allow artists to
            manually publish their works.
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.container {
  margin: 20px auto;
  min-height: 100vh;
  text-align: center;
}

.content {
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-info {
    max-width: 720px;
    .logo {
      width: 200px;
    }
    h2 {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 10px;
    }
  }
}
</style>
