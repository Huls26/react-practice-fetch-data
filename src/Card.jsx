export default function Card({name, country, domains}) {
  return (
    <div className="card">
        <h3 >{name}</h3>
        <p>Country: {country}</p>
        <p>Website: {domains[0]}</p>
      </div>
  )
}