import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEn from './locals/en.json'
import translationFa from './locals/fa.json'

const resources ={
    en:{
        translation:translationEn
    },
    fa:{
        translation:translationFa
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng:'en',
    keySeparator:false,
    fallbackLng: 'en',
    interpolation:{
        escapeValue:false
    }
})

export default i18n;