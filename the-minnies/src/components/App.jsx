import Navbar from './Navbar';
import Roadmap from './Roadmap';

function App()
{
  return(
    <div>
      <div class="snap-y snap-mandatory w-screen h-screen overflow-x-hidden">
        <Navbar/>
        <Roadmap/>
      </div>
    </div>
  );
}

export default App;

