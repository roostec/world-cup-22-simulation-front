<script setup lang="ts">

</script>

<template>
  <q-list>
        <q-item-label header>Menu</q-item-label>

          <q-item clickable tag="a" to="SignIn">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>                
              <q-item-label caption>Dashboard</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" to="SignIn">
            <q-item-section avatar>
              <q-icon name="format_list_numbered" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Classificacao</q-item-label>                
              <!-- <q-item-label caption>-</q-item-label> -->
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" to="SignIn">
            <q-item-section avatar>
              <q-icon name="sports_soccer" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Palpites</q-item-label>                
              <q-item-label caption>-</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" to="SignIn">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Convidar Amigos</q-item-label>                
              <q-item-label caption>-</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" to="SignIn">
            <q-item-section avatar>
              <q-icon name="phonelink_setup" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Moderacao</q-item-label>                
              <q-item-label caption>-</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" to="SignIn">
            <q-item-section avatar>
              <q-icon name="design_services" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Editar</q-item-label>                
              <q-item-label caption>-</q-item-label>
            </q-item-section>
          </q-item>

      </q-list>
</template>

<style lang='sass'>

</style>