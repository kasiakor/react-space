import "./App.css";
import logo from "./logo.svg";
import { InMemoryCache, ApolloClient } from "@apollo/client";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  link: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="spacex logo"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
      </div>
    </ApolloProvider>
  );
}

export default App;
