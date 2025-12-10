import React from "react";
import "./New_Collection.css";
import new_collections from "../Assets/new_collections";
import { Item } from "../Item/Item";

const New_Collection = () => {
  return (
    <div className="newCollection">
      <div className="head">
        <h2>New Collection</h2> <hr />
      </div>

      <section className="collection">
        {new_collections.map((item) => {
          return <Item {...item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default New_Collection;
