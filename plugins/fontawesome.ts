import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faCompass)
library.add(faFacebook)
library.add(faTwitter)

Vue.component('fa', FontAwesomeIcon)
