import {fetchData} from "./api/pokemonsList"
import Card from "./components/Card/page"
import {Conteiner} from "./style"

const App = async () => {
  const {results} = await fetchData()
 
  return (
    <>
   
   {results.length > 0 && results.map(({name}) => (
    <Card name={name} />

    ))}
    
    
    </>
  )
}

export default App