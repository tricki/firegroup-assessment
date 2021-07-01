import { createApp } from 'vue'
import { applyPolyfills, defineCustomElements } from 'fg-components/loader';
import App from './App.vue';
import Icon from '@/components/Icon.vue';
import VideoThumb from '@/components/VideoThumb.vue';
// import './registerServiceWorker'
import router from './router'
import './assets/css/global.scss';

const app = createApp(App).use(router);

app.component('Icon', Icon);
app.component('VideoThumb', VideoThumb)

// Bind the custom elements to the window object
applyPolyfills().then(() => {
    defineCustomElements();
});

app.mount('#app')
