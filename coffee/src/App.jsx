import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";
import Stats from "./components/Stats"
import History from "./components/History"

function App(){
  
  // it is a good practice to make a dummy data 
  const isAuthenticated = false;
  
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
// if the authentication is false do not show the 