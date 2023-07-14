import { useState, useEffect } from "react";
import { loader, copy, linkIcon, tick, enter_sign } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
const Demo = () => {
  const [visibleText, setVisibleText] = useState("");
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [imagSrc, setImageSrc] = useState(copy);
  const [allArticle, setAllArticle] = useState([]);
  // let countIndex = 0;
  useEffect(() => {
    let currentWordIndex = 0;
    const textInterval = setInterval(() => {
      if (currentWordIndex >= article.summary.length) {
        clearInterval(textInterval);
        return;
      }
      setVisibleText(article.summary.slice(0, currentWordIndex));
      currentWordIndex++;
    }, 20);

    return () => {
      clearInterval(textInterval);
    };
  }, [article.summary]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  useEffect(() => {
    const articleFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articleFromLocalStorage) {
      setAllArticle(articleFromLocalStorage);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data?.summary };
      setArticle(newArticle);
      const updatedArticle = [newArticle, ...allArticle];
      if ((updatedArticle, length > 3)) {
        updatedArticle.pop();
      }
      localStorage.setItem("articles", JSON.stringify(updatedArticle));
      setAllArticle(updatedArticle);
      console.log(newArticle);
    }
  };
  return (
    <section className=" w-full mt-10">
      <div>
        {/* To center the form in desktop mode */}
        <div className="md:flex md:justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center relative  md:w-[45vw] "
          >
            <img
              className="absolute left-2 w-5 "
              src={linkIcon}
              alt="link-icon"
            />
            <input
              className="url_input peer"
              type="url"
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              value={article.url}
              required
              placeholder="Paste your URL here"
            />
            <button
              type="submit"
              className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
            >
              <img className="w-6" src={enter_sign} />
            </button>
          </form>
        </div>
        {/**Browser History */}
        <div className="flex flex-col items-center gap-1 max-h-60 overflow-y-auto my-4">
          {allArticle?.map((article, i) => {
            return (
              <div
                key={`link-${i}`}
                onClick={() => {
                  setArticle(article);
                  setImageSrc(tick);
                  setTimeout(() => {
                    setImageSrc(copy);
                  }, 1000);
                }}
                className="link_card md:w-[45vw] "
              >
                <div className="copy_btn">
                  <img src={imagSrc} alt="copy-icon" />
                </div>
                <p className="text-sm overflow-hidden overflow-ellipsis whitespace-nowrap text-blue-500 w-72 md:w-full">
                  {article.url}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* {Display result} */}
      <div className="max-w-full flex justify-start items-center">
        {isFetching ? (
          <div className="w-full flex justify-center mt-4">
            <img src={loader} alt="loadre" />
          </div>
        ) : error ? (
          <p className="text-xl font-semibold text-center">
            Something wents wrong........
            <span className="text-gray-700">{error?.data?.error}</span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col justify-start items-start gap-3 text-left">
              <h2 className="text-xl font-semibold font-satoshi">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p>{visibleText}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
