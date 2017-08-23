# Vue Validate Persian 
validate persian phone , email, number

### Install
```
 npm install --save vue-persian-validate
```

### Confg


1 ) create file **plugin/VueNumberFormating.js**


----------

```
 import Vue from 'vue'
 import VuePersianValidate from 'vue-persian-validate'

 Vue.use(VuePersianValidate);
 
```



2 ) import To **main.js**

---

```
 import Vue from 'vue'
 import App from './App.vue'
 import VueNumberFormating from './plugin/VueNumberFormating'
        
  new Vue({
	  el: '#app',
      render: h => h(App),
  }); 

```


### Use
```
<template>

		<!-- Phone -->
        <input type="text" v-model="persion_phone" />
        
        <!-- Email -->
        <input type="text" v-model="email" />
		
		<button @click="check" />
</template>
    
    // OR
    
    <script>
        export default {
            data() {
				return {
					persion_phone : '',
					email: ''
				}
			},
			methods : {
				check(){
					if (this.$msValid.validPhone(this.persion_phone)) {
						console.log("Phone Validate ..") // 09189772330
					}else {
						console.log("Phone Not Validate ..")
					}

					if (this.$msValid.validEmail(this.email)) {
						console.log("Phone Validate ..") // mehrdad3na@gmail.com
					}else {
						console.log("Phone Not Validate ..")
					}
				}
			}
        }
    </script>

```



