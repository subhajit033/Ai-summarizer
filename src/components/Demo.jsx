import { useState, useEffect } from "react";
import { loader, copy, linkIcon, tick, enter_sign } from "../assets";
const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const handleSubmit = async () => {
    alert("Submoij");
  };
  return (
    <section className=" w-full mt-10">
      <div>
        <form
          onSubmit={() => {
            handleSubmit();
          }}
          className="flex justify-center items-center relative"
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
        {/**Browser History */}
      </div>
    </section>
  );
};

export default Demo;
