<template>
  <q-page class="flex flex-center sm:absolute sm:left-32">
    <q-form @submit.prevent.stop="onCreate" class="glass flex justify-center items-center w-full">
      <q-card flat class="q-pa-md bg-transparent w-11/12 sm:w-[448px]">
        <q-card-section>
          <div class="text-h5 text-center">Criar conta</div>
        </q-card-section>
        <q-card-section class="q-gutter-sm">          
          <q-input
            v-model="form.name"
            :label="$t('NAME')"
            type="text"
            lazy-rules
            :rules="isRequired"
            color="primary"
            label-color="primary"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-account-outline" color="primary" class="cursor-pointer" />
            </template>
          </q-input>
          <q-input
            autocomplete="false"
            v-model="form.email"
            :label="$t('EMAIL')"
            type="email"
            lazy-rules
            :rules="isEmail"
            color="primary"
            label-color="primary"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-email-outline" color="primary" class="cursor-pointer" />
            </template>
          </q-input>
          <q-input
            autocomplete="false"
            v-model="form.password"
            lazy-rules
            :rules="isRequired"
            :label="$t('PASSWORD')"
            color="primary"
            label-color="primary"
            :type="showPassword ? 'text' : 'password'"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-form-textbox-password" color="primary" class="cursor-pointer" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                class="cursor-pointer"
                color="primary"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-btn
            label="Criar conta"
            color="primary"
            class="full-width q-py-md q-mb-md"
            no-caps
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
  import { ref } from 'vue';
  import { useQuasar } from 'quasar';
  import { useI18n } from "vue-i18n";
  import UseNotify from '../composables/UseNotify'

  const $q = useQuasar();
  
  const {notify} = UseNotify()

  const form = ref({
    name: '',
    email: '',
    password: ''
  })

  const { t } = useI18n({
    inheritLocale: true,
    useScope: 'local'
  })

  const showPassword = ref(false);

  const isRequired = [
    (v: string) => (v && v.length > 0) || t('PLEASE_TYPE_SOMETHING')
  ]

  const isEmail = [
    (v: string) => !!v || t('REQUIRED_EMAIL'),
    (v: string) => /.+@.+\..+/.test(v) || t('INVALID_EMAIL')
  ]

  const onCreate = () => {
    // this.logIn();
    notify('negative', 'Erro', 'Erro ao criar conta');
    console.log(form.value)
  }
</script>

<style></style>