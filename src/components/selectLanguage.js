import {useContext} from "react";
import {availableLanguages} from "../../i18n";
import {LanguageContext} from "../pages/_app";

export default function SelectLanguage() {


  const {language, setLanguage} = useContext(LanguageContext);


  return (
    <>
      <select value={language} onChange={(event) => setLanguage(event.target.value)}>
        {availableLanguages.map((lng) => {
          return (<option key={lng} value={lng}>{lng}</option>)
        })}
      </select>
    </>
  )
}