import { createApp } from 'vue'
import { applyPolyfills, defineCustomElements } from 'fg-components/loader';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App).use(router);

// Bind the custom elements to the window object
applyPolyfills().then(() => {
    defineCustomElements();
});

app.mount('#app')
