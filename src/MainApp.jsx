import { useState, useEffect } from 'react';
import ResultSearch from './ResultSearch';

// when user write an input and click submit/search button
// then fetch data with the value of input
// when list or the data response length is greater than 15
// render only 15 object
// if there is no data return 'School not found'

export default function Main() {
  const [universityApi, setUniversityAPi] = useState();
  const [inputVal, setInputValue] = useState('');
  const [isCard, setIsCard] = useState(true);
  
  async function fetchApi(nameValue) {
    const nameSearch = nameValue;
    const url = nameSearch ? `http://universities.hipolabs.com/search?country=United+States&name=${nameSearch}` : 'http://universities.hipolabs.com/search?country=United+States';
    const res = await fetch(url);
    const data = await res.json();
    
    setUniversityAPi(() => data);
  }
  
  useEffect(() => {
      fetchApi()
  }, [])
  
  function handleOnChange(event) {
    const target = event.target;
    const value = target.value;

    setInputValue(() => value);
  }

  function handleSubmit() {
    fetchApi(inputVal)
  }
  
  function handleFilterView() {
    setIsCard(prev => !prev)
  }

  return (
      <main className='main'>
        <section className='search-bar'>
            <h2>Search Bar:</h2>
            <input type='text' name='input-search' onChange={handleOnChange} value={inputVal}/>
            <button onClick={handleSubmit}>Search</button>
        </section>
        <div>
            <button style={{opacity: isCard ? 1 : .55}} onClick={handleFilterView}>List View</button>
        </div>
       {universityApi ? <ResultSearch data={universityApi} renderView={isCard}/> : <h1>...Loading</h1>}
      </main>
  )
}