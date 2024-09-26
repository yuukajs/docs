import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import NotFound from './NotFound.vue'
import TextedImage from './components/TextedImage.vue'
import RandomFlower from './components/RandomFlower.vue'
import Layout from './Layout.vue'
import './index.less'
import './rubik.css'

export default {
  extends: DefaultTheme,
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('TextedImage', TextedImage)
    app.component('RandomFlower', RandomFlower)
  }
} satisfies Theme
