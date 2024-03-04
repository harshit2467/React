/*
<div id="parent">
<div id="child">
<h1> I am good
</h1>
<h2>I am not good</h2></div>
<div id="child2">
<h1> I am good
</h1>
<h2>i am not good</h2></div></div>
*/
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am good"),
    React.createElement("h2", {}, "I am not good"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am good"),
    React.createElement("h2", {}, "I am not good"),
  ]),
]);
console.log(parent);
/*const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "hello world form react"
  );*/
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
