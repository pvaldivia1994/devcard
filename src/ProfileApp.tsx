import React from 'react'
import { I18nProvider } from './i18n/I18nContext'
import { AppRouter } from './routers/AppRouter'

export const ProfileApp = () => {
  return (
    <I18nProvider>
      <AppRouter />
    </I18nProvider>
  )
}
