import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import { gql, useQuery } from "@apollo/client";

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`;

console.log(BOOKS);

function Books() {
  const { loading, error, data } = useQuery(BOOKS);
  return data.test.map(({ title, author }) => (
    <div key={title}>
      <p>
        {title}: {author}
      </p>
    </div>
  ));
}

export function App() {
  return (
    <div>
      <h2>Graph QL</h2>
      <Books />
    </div>
  );
}
