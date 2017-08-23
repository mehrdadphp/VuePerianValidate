
export default function (Vue) {
  Vue.msValid = {

    validPhone(phone) {
      const p = /^\b09(\d[0-9]{8})$/;
      return re.test(p);
    },

    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

  };

  Object.defineProperties(Vue.prototype, {
    $msValid : {
      get() {
        return Vue.msValid;
      }
    }
  })
}