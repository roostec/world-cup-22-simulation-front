<template>
  <q-page class="flex flex-center sm:absolute sm:left-32">
    <q-form @submit.prevent.stop="onForgotPassword" class="glass flex justify-center items-center w-full">
      <q-card flat class="q-pa-md bg-transparent w-11/12 sm:w-[448px]">
        <q-card-section>
          <div class="text-h5 text-center">Recupera senha</div>
        </q-card-section>
        <q-card-section class="q-gutter-sm">
          <q-input
            v-model="form.email"
            label="Email"
            type="email"
            :rules="isEmail"
            lazy-rules
            color="primary"
            label-color="primary"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-email-outline" color="primary" class="cursor-pointer" />
            </template>
          </q-input>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-btn
            label="Enviar"
            color="primary"
            class="full-width q-py-md q-mb-md"
            no-caps
            :loading="loadingForgotPassword"
            unelevated
            type="submit"
          />

          <q-btn
            label="Cancelar"
            color="primary"
            outline
            class="full-width q-py-md"
            no-caps
            unelevated
            to="signin"
          />
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useI18n } from "vue-i18n";

  const { t } = useI18n({
    inheritLocale: true,
    useScope: 'local'
  })

  const form = ref({
    email: ""
  });

  const loadingForgotPassword = ref(false);

  const onForgotPassword = () => {
    console.log('forgot password');
  }

  const isEmail = [
    (v: string) => !!v || t('REQUIRED_EMAIL'),
    (v: string) => /.+@.+\..+/.test(v) || t('INVALID_EMAIL')
  ]

</script>

<style></style>