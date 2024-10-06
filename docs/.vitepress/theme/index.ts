import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import type { EnhanceAppContext } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import NotFound from './NotFound.vue'
import TextedImage from './components/TextedImage.vue'
import RandomFlower from './components/RandomFlower.vue'
import Hitokoto from './components/Hitokoto.vue'
import Layout from './Layout.vue'
import './index.less'
import './rubik.css'
import '@shikijs/vitepress-twoslash/style.css'

export default {
  extends: DefaultTheme,
  Layout,
  NotFound,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('TextedImage', TextedImage)
    app.component('RandomFlower', RandomFlower)
    app.component('Hitokoto', Hitokoto)
    enhanceAppWithTabs(app)
    app.use(TwoslashFloatingVue)
  }
} satisfies Theme
