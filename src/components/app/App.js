import AppNavigation from '../appNavigation/AppNavigation';
import HomePage from '../pages/HomePage/HomePage';

const App = () => {
   return (
      <div className="app">
         <div className="container">
            <AppNavigation />
            <HomePage />
         </div>
      </div>
   );
};

export default App;
