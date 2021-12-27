import {createContext, useContext, useState} from 'react'

const ResultsContext = createContext()

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultsContextProvider = ({children}) => {
 const [results, setResults] = useState([])
 const [isLoading, setIsLoading] = useState(false)
 const [searchTerm, setSearchTerm] = useState('Codecademy')

 const getResults = async (type) => {
     setIsLoading(true)
   const response = await fetch(`${baseUrl}${type}`, {
       method: 'GET',
       headers: {
        'x-user-agent': 'desktop',
        'x-proxy-location': 'US',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '7b8379eb45msh7a901c7ea77e7adp18580ajsn9323c6e108b8'
      }
   })

   const data = await response.json();

   if(type.includes('/news')) {
    setResults(data.entries);
   } else if (type.includes('/images')) {
    setResults(data.image_results);
   } else {
    setResults(data.results);
   }

   setIsLoading(false);

   console.log(data)
 }


 return (
     <ResultsContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
      {children}
     </ResultsContext.Provider>
 )
}

export const useResultsContext = () => useContext(ResultsContext)