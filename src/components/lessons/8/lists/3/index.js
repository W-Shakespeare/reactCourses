import React from "react";

function ListItem({ data: { name, age } }) {
  // const key = Date.now();
  return <li>{`${name}, ${age} years old`}</li>;
}
function FriendsList({ friends }) {
  //если мы знаем что последовательность в масиве
  // не будет меняться то можно использовать индекс
  const listItems = friends.map((friend, i) => (
    <ListItem key={i} data={friend} />
  ));
  return (
    <div>
      <h3>Correct Key Usage</h3>
      <ol>{listItems}</ol>
    </div>
  );
}
const friends = [
  { name: "Peter", age: 25 },
  { name: "Sachin", age: 33 },
  { name: "Kevin", age: 37 },
  { name: "Dhoni", age: 48 },
  { name: "Alisa", age: 29 },
];

const Task = () => {
  return (
    <div>
      <FriendsList friends={friends} />
    </div>
  );
};

export default Task;
