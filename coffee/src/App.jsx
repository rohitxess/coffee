import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";
import Stats from "./components/Stats"
import History from "./components/History"
import { useAuth } from "./context/AuthContext";
import { coffeeConsumptionHistory } from "./utils";

function App(){
  const { globalUser, globalData } = useAuth();
  
  // it is a good practice to make a dummy data 
  
  const isAuthenticated = globalUser;
  const isData = globalData && !!Object.keys(globalData || {}).length

  // to ensure the functionalities are only available to users who have signed up
  // if the authentication is false do not show the stats and data 
  
  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )

// if the person is authenticated then show the full content, if not prompt the user to signup

  return (
    <Layout>
      <Hero />
      <CoffeeForm isAuthenticated={isAuthenticated} />
      {(isAuthenticated && isData)&& (authenticatedContent)} 
    </Layout>
  )
}


export default App
