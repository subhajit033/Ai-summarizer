import { useDispatch } from "react-redux";
import { addText } from "../services/changeLanguageSlice";
import { useEffect } from "react";
const useTranslateText = (summary, languageId, isTranslationReqiured) => {
  const dispatch = useDispatch();
  const url = "https://text-translator2.p.rapidapi.com/translate";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "9dc79ea5c8mshe313fe98b1ebd74p13ae7ejsne5f253de8390",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: new URLSearchParams({
      source_language: "en",
      target_language: languageId,
      text: summary,
    }),
  };
  useEffect(() => {
    if (isTranslationReqiured) {
      getTranslateData();
      
    }
  }, [summary, languageId, isTranslationReqiured]);

  const getTranslateData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();      
      dispatch(addText(result));
    } catch (error) {
      console.error(error);
    }
  };
};

export default useTranslateText;
