import React from "react";

const List = ({ user }) => {
  return (
    <>
      {user.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h4>{age}</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
