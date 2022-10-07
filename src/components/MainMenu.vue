<script setup lang="ts">

</script>

<template>
  <q-list>
        <q-item-label header>Menu</q-item-label>

          <q-item clickable tag="a" to="Dashboard">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('HOME')}}</q-item-label>                
              <q-item-label caption>Dashboard</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" to="Classification">
            <q-item-section avatar>
              <q-icon name="format_list_numbered" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('CLASSIFICATION')}}</q-item-label>                
              <!-- <q-item-label caption>-</q-item-label> -->
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" to="Hunch">
            <q-item-section avatar>
              <q-icon name="sports_soccer" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('HUNCH')}}</q-item-label>                
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" to="Invite">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('INVITE_FRIENDS')}}</q-item-label>    
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" to="Moderation">
            <q-item-section avatar>
              <q-icon name="phonelink_setup" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('MODERATION')}}</q-item-label> 
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" to="Edit">
            <q-item-section avatar>
              <q-icon name="design_services" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('EDIT')}}</q-item-label>                
              <q-item-label caption>{{$t('EDIT_CAPTION')}}</q-item-label>
            </q-item-section>
          </q-item>

      </q-list>
</template>

<style lang='sass'>

</style>