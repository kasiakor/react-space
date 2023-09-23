import "./App.css";
import logo from "./logo.svg";
import { InMemoryCache, ApolloClient, createHttpLink } from "@apollo/client";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/Launches";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   link: "http://localhost:5000/graphql",
//   cache: new InMemoryCache(),
// });

console.log("http", httpLink);
console.log("client", client);

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="spacex logo"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
