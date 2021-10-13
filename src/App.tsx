import * as React from "react";
import { getCatFacts, getCatPics } from "./api";
import { CatObj, CatFactObj } from "./Interface";

const { useEffect, useState } = React;

function App(): JSX.Element {
  const [getImg, setImg] = useState<CatObj>();
  const [getFact, setFact] = useState<CatFactObj>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCatPics().then((cat) => {
      setImg(cat);
    });
    getCatFacts().then((cat) => {
      setFact(cat);
    });
    setLoading(false);
  }, []);

  return (
    <div className="container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      {!loading ? (
        <>
          <h2 className="color-primary mt-2">Here Is Your Daily Cat pic</h2>
          <div className="card w-50">
            <img src={getImg?.webpurl} alt="" className="card-img-top" />
            <div className="card-body">
              <p className="card-text text-primary">{getFact?.fact}</p>
            </div>
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;
