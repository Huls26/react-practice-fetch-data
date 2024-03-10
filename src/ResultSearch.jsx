
export default function ResultSearch({data}) {
  const sliceData = data?.slice(0, 15);
  const renderList = sliceData?.map((schoolData, idx) => {
    const {name, country, domains} = schoolData;

    return (
      <div key={idx} className="card">
        <h3 >{name}</h3>
        <p>Country: {country}</p>
        <p>Website: {domains[0]}</p>
      </div>
    )
  })

  console.log(renderList)

  return (
    <section className="card-list">
      {renderList}
    </section>
  )
}