<template>
  <!-- <q-page class="flex flex-center"> -->
    <q-page class="flex flex-center sm:absolute sm:left-32">
    <q-form @submit.prevent.stop="onLogin" class="glass flex justify-center items-center w-full">
      <q-card flat class="q-pa-md bg-transparent w-11/12 sm:w-[448px]">
        <q-card-section class="flex flex-col justify-center content-center">
          <q-img
            src="src/assets/img/qatar-world-cup-logo.png"
            width="200px"
            spinner-color="primary"
            spinner-size="82px"

          />
          <div class="text-h5 text-center">Bolao Bolha</div>
        </q-card-section>
        <q-card-section class="q-gutter-sm">
          <q-input
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
          <div class="row justify-between" style="margin-top: -12px">
            <q-space />
            <router-link to="forgotpassword" class="text-primary pt-5" append>
              {{$t('FORGOT_PASSWORD')}}
            </router-link>
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-btn
            :label="$t('LOGIN')"
            color="primary"
            class="full-width q-py-md q-mb-md"
            no-caps
            unelevated
            type="submit"
          />
          <q-btn
            :label="$t('CREATE_ACCOUNT')"
            color="primary"
            outline
            class="full-width q-py-md"
            no-caps
            unelevated
            to="/signup"
          />
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import { useI18n } from "vue-i18n";
  import { useStore } from 'vuex';
  import services from '../services';
  import { useRouter, useRoute } from 'vue-router'
  const Router = useRouter();
  const Route = useRoute();

  const { t } = useI18n();

  const form = ref({
    email: '',
    password: '',
  });

  const showPassword = ref(false);

  const isRequired = [
    (v: string) => (v && v.length > 0) || t('PLEASE_TYPE_SOMETHING'),
    (v: string) => (v.length > 5) || t('PASS_6_CARACTER'),
  ]

  const isEmail = [
    (v: string) => !!v || t('REQUIRED_EMAIL'),
    (v: string) => /.+@.+\..+/.test(v) || t('INVALID_EMAIL')
  ]

  const onLogin = async () => {
    console.log(form.value);
    const response = await services.login(form.value.email, form.value.password);
    if (response?.status === 201) {
      Router.push('/dashboard');
    }
  };

</script>
