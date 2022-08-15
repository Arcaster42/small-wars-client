import '../../css/ResourceCard.css'

function ResourceCard (props: { name: string, value: number }) {
  return (
    <div className="resource-card">
      <div className="resource-name">
        <img className="resource-img" src={require(`../../assets/icons/${props.name}.png`)} alt={props.name}/>
      </div>
      <div className="resource-value">
        {props.value.toFixed(0)}
      </div>
    </div>
  )
}

export default ResourceCard