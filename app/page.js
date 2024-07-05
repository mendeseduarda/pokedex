import {fetchData} from "./api/pokemonsList"
import Card from "./components/Card/page"
import Container from "./style"

const App = async () => {
  const {results} = await fetchData()
 
 
  return (
    <>
   
   {results.length > 0 && results.map(({name}) => (
    <Card key={name} name={name} />

    ))}
    
    
    </>
  )
}

export default App