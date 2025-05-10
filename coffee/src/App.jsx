import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";
import Stats from "./components/Stats"
import History from "./components/History"

function App(){
  
  // it is a good practice to make a dummy data 
  
  const isAuthenticated = true;

  // to ensure the functionalities are only available to users who have signed up
  // if the authentication is false do not show the stats and data 
  
  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )

  return (
    <Layout>
      <Hero />
      <CoffeeForm />
      {isAuthenticated && (authenticatedContent)} 
    </Layout>
  )
}


export default App
