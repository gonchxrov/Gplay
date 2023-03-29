import React, { useEffect, useState } from "react";
import { fetchPurchases } from "../../http/PurchaseAPI";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { ROUTE } from "../../router";
import { imgPath, format } from "../../helpers";

import "./Purchases.scss";

const Purchases = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetchPurchases()
      .then((data) => setPurchases(data))
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <Layout isLoaded={isLoaded}>
      <h1>Purchases</h1>
      <section className="section--purchases">
        {purchases.length > 0 ? (
          <div>
            <ul className="purchases-list">
              {purchases.map((item, i) => (
                <li className="purchase-item" key={i}>
                  <div className="purchase-item__image">
                    <Link to={`${ROUTE.GAME}/${item.game.id}`}>
                      <img
                        src={`${imgPath}/img/games/main/${item.game.photo}`}
                        alt={item.game.title}
                      />
                    </Link>
                  </div>
                  <div className="purchase-item__name">
                    <Link className="link" to={`${ROUTE.GAME}/${item.game.id}`}>
                      {item.game.title}
                    </Link>
                  </div>
                  <div className="purchase-item__price">
                    <span>{item.price * item.quantity} €</span>
                  </div>
                  <div className="purchase-item__quantity">
                    <span>{item.quantity}</span>
                  </div>
                  <div className="purchase-item__date">
                    <span>{format(item.createdAt)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="oops-block">
            <h2>You don't have any purchases</h2>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Purchases;
