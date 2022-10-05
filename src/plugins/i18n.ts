import { createI18n, LocaleMessages, VueMessageType } from "vue-i18n";

import en from "../locales/en.json";
// import es from "../locales/es.json";
import pt from "../locales/pt.json";

const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_APP_I18N_LOCALE || "pt",
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || "pt",
  messages: {pt, en},
  silentTranslationWarn: true,
  globalInjection: true,
});

export default i18n;