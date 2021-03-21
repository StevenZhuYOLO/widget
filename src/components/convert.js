import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const GOOGLE_TRANSLATE_API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translated, settranslated] = useState('');
  const [debouceText, setdebouceText] = useState(text);

  useEffect(() => {
    const setTimeOutIdentifier = setTimeout(() => {
      if (text) {
        setdebouceText(text);
      }
    }, 1000);
    return () => {
      clearTimeout(setTimeOutIdentifier);
    };
  }, [text]);

  useEffect(() => {
    const googleTranslate = async () => {
      const { data } = await Axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouceText,
            target: language.value,
            key: GOOGLE_TRANSLATE_API_KEY,
          },
        }
      );
      settranslated(data.data.translations[0].translatedText);
    };
    if(debouceText){googleTranslate()};
  }, [language, debouceText]);
  
  return(
    <div>
      <h1 className="ui header">
        {translated}
      </h1>
    </div>
  );
};

export default Convert;