import React from "react";

const friends = ["Mikenzi", "Cash", "Steven", "Kimmy", "Doug"];

const List = () => {
  return (
    <ul>
      {friends.map((friend, i) => {
        return <li key={`${friend.id}${i}`}>{friend}</li>;
      })}
    </ul>
  );
};

const Task = () => {
  return (
    <div>
      <List friends={friends} />
    </div>
  );
};

export default Task;
