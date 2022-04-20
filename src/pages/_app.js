import '../../styles/globals.css'

import '../../i18n';
import {createContext, useEffect, useMemo, useState} from "react";
import {useTranslation} from "react-i18next";

const DEFAULT_CONTEXT = {
  language: "en",
  setLanguage: () => {
  }
}

export const LanguageContext = createContext(DEFAULT_CONTEXT);

function LanguageProvider({children}) {
  const {i18n} = useTranslation();
  const [language, setLanguage] = useState(i18n.language);


  useEffect(() => {
    setLanguage(i18n.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    i18n.changeLanguage(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const value = useMemo(() => {
    return ({
      language,
      setLanguage
    })
  }, [language])
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>)
}

function MyApp({Component, pageProps}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
      setIsMounted(true);
  }, [])
  return (<LanguageProvider>
    {isMounted && <Component  {...pageProps} />}
  </LanguageProvider>)

}

export default MyApp
