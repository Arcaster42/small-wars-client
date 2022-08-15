import '../../css/ActionCard.css'

function ResourceCard (props: { name: string, updateMenu: (val: string) => void }) {
  return (
    <div className="card">
      <div className="action-icon">
        <img width="80px" src={require(`../../assets/icons/action_${props.name}.png`)} alt={props.name} onClick={() => {props.updateMenu(props.name)}}/>
      </div>
    </div>
  )
}

export default ResourceCard