// import { deleteRounded, errorRounded, tickrounded } from 'assets/images';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.css';

iziToast.settings({
  timeout: 2000,
  resetOnHover: false,
  progressBar: false,
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOutDown',
  position: 'topRight',
  displayMode: 'replace',
  class: 'custom-toast',
});

export function success({ title, message }) {
  iziToast.success({
    title,
    message,
    // iconUrl: tickrounded,
  });
}
export function deleted({ title, message }) {
  iziToast.error({
    title,
    message,
    // iconUrl: deleteRounded,
  });
}

export function error({ title, message }) {
  iziToast.error({
    title,
    message,
    // iconUrl: errorRounded,
  });
}

export function warning({ title = '', message }) {
  iziToast.warning({
    title,
    message,
  });
}

export function info({ title = '', message }) {
  iziToast.info({
    title,
    message,
  });
}
