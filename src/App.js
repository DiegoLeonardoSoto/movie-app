import {Dataprovider} from './context/DataContext'
import BodyContent from "./Components/BodyContent";
import Header from "./Components/Header";


function App() {


  return (
    <div className="App">
      <Dataprovider>
        <Header/>
        <BodyContent/>
      </Dataprovider>      
    </div>
  );
}

export default App;
