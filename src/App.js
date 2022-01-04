import Timelines from './components/Timeline';
import ahmedData from "./data"
function App() {
  const arrayData = ahmedData.map((time) => <Timelines datatime={time} />)
  
  return (
    <>
    {arrayData}
    </>
    
  );
}

export default App;
