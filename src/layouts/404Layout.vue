<template>
  <q-layout class="offside">
    <q-page-container>
      <q-page class="flex flex-col flex-center"> 

        <q-img
          src="src/assets/img/qatar-world-cup-logo.png"
          width="200px"
          spinner-color="primary"
          spinner-size="50px"  
        />

        <q-card class="glass q-pa-lg mt-10 rounded-md">
          <q-card-section class="flex flex-col justify-center content-center">
            <h2 class="text-7xl text-center uppercase">{{$t('OFFSIDE')}}</h2>
            <p class="text-4xl py-5 text-center">404</p>
            <p class="mb-10 text-center">
              Ops... <br>
              Parece que voce tentou acessar um endereco inexistente! <br>
              Verifique se o endereco esta correto e tente novamente.
            </p>

            <q-btn
            :label="$t('BACK_TO_HOME')"
            color="primary"
            class="full-width q-py-md q-mb-md"
            no-caps
            unelevated
            to="/signin"
            icon="backspace"
          />         
          </q-card-section>
        </q-card>
        
      </q-page>     
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
</script>

<style>
.offside {
  background-image: url('src/assets/img/soccer-offside.jpg');
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* opacity: 0.8; */
}
</style>
