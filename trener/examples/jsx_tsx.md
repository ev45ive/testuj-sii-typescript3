```ts


// TS
type User = {
  name: string;
};
const user = { name: "Artem" };

const MakeUser = function (props: { user: User }) {
  return <div>{props.user.name}</div>;
};

// TSX
const html = (
  <div id="123">
    <div>{user.name}</div>
    <div>{user.name}</div>
    {/* {MakeUser({ user })} */}
    <MakeUser user={user} />
  </div>
);

// JS
const html2 = {
  type: "div",
  props: {
    id: "123",
    children: [
      {
        type: "div",
        children: [user.name],
      },
      MakeUser({ user }),
      MakeUser({ user }),
    ],
  },
};

console.log(html, html2);

```