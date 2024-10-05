import AppNavigation from '../appNavigation/AppNavigation';
import AppFooter from '../appFooter/AppFooter';
import HomePage from '../pages/HomePage/HomePage';

const App = () => {
   return (
      <div className="app">
         <div className="container">
            <AppNavigation />
            <HomePage />
         </div>
         <AppFooter />
      </div>
   );
};

export default App;
