import { useState, useEffect } from 'react';

// function ResultSearch() {
//     return (
//         <section>
            
//         </section>
//     )
// }

// when user write an input and click submit/search button
// then fetch data with the value of input
// when list or the data response length is greater than 15
// render only 15 object
// if there is no data return 'School not found'

export default function Main() {
  const [universityApi, setUniversityAPi] = useState();
  
  async function fetchApi() {
      const res = await fetch('http://universities.hipolabs.com/search?country=United+States&name=a');
      const data = await res.json();
      
      setUniversityAPi(() => data);
  }
  
  console.log(universityApi)
  useEffect(() => {
      fetchApi()
  }, [])
  
  return (
      <main>
          <h2>Search Bar:</h2>
          <input />
      </main>
  )
}