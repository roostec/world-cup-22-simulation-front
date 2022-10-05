import { useQuasar } from 'quasar'
export default function useNotify () {
  const $q = useQuasar();

  const notify = (type: string = 'info', message: string, caption: string = '') => {
    // type: 'info', 'positive', 'negative', 'warning'
    $q.notify({
      type,
      message,
      caption
    })
  }

  // const notifyDefault = (message: string = '') => {
  //   $q.notify({
  //     message: 'Jim pinged you.',
  //     caption: 'jjj5 minutes ago',
  //     color: 'secondary'
  //   })
  // }  

  return {
    notify
  }
}
