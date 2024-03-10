import Card from "./Card";

export default function ResultSearch({data, renderView}) {
  const sliceData = data?.slice(0, 15);
  const renderList = sliceData?.map((schoolData, idx) => {
    const {name, country, domains} = schoolData;
    if (renderView) {
      return (
        <Card 
          key={idx} 
          name={name} 
          country={country} 
          domains={domains} 
        />
      )
    }
    
    return (<h1 key={idx}>{name}</h1>)
  })

  return (
    <section className="card-list">
      {renderList}
    </section>
  )
}