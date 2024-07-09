import {fetchData} from "./api/pokemonsList"
import Card from "./components/Card/page"

const App = async () => {
    const {results} = await fetchData()
    const limitedResults = results.slice(0, 3);


    return (
        <>

            {limitedResults.length > 0 && limitedResults.map(({name}) => (
                <Card key={name} name={name}/>

            ))}


        </>
    )
}

export default App