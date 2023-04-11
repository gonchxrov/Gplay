import React from "react";
import { Item } from "../Item/Item";

import "./ItemList.scss";

export function ItemList({ items, type }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} type={type} />
      ))}
    </div>
  );
}
