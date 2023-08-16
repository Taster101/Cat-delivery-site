import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import  Adoption  from './components/Adoption'
import { VIEW_KITTIES } from '../../client/src/utils/queries';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})
function App() {
  
  return (
    <ApolloProvider client={client}>
    <div className="App">
    Hello 
    <Adoption />
    </div>
    </ApolloProvider>
  );
}

export default App;
