import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Translation = () => {
  const [visibleText, setVisibleText] = useState("");
  const translatedText = useSelector((store) => {
    return store.language.translatedText;
  });
  useEffect(() => {
    let currentWordIndex = 0;
    const textInterval = setInterval(() => {
      currentWordIndex++;
      if (currentWordIndex >= translatedText?.data?.translatedText.length) {
        clearInterval(textInterval);
        return;
      }
      setVisibleText(
        translatedText?.data?.translatedText.slice(0, currentWordIndex)
      );
    }, 20);

    return () => {
      clearInterval(textInterval);
    };
  }, [translatedText?.data?.translatedText]);
  return (
    <>
      {translatedText?.data?.translatedText && (
        <div className="flex flex-col justify-start w-full">
          <h2 className="text-xl font-bold">
            Translated <span className="blue_gradient">Summary</span>
          </h2>
          <div className="summary_box ">
            <p className="text-sm">{visibleText}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Translation;
