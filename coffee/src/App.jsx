import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";

function App(){
  
  // it is a good practice to make a dummy data 
  const isAuthenticated = false;

  return (
    <Layout>
      <Hero />
      <CoffeeForm />
    </Layout>
  )
}