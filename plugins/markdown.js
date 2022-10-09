import Vue from 'vue'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import enUS from '@kangc/v-md-editor/lib/lang/en-US'

VueMarkdownEditor.lang.use('en-US', enUS)


// Prism
import Prism from 'prismjs'
// highlight code
import 'prismjs/components/prism-json'

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
})

Vue.use(VueMarkdownEditor)
