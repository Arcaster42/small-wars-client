import { BuildingName, CostPlan } from "../../types/game"
import '../../css/ConstructionItem.css'

function ConstructionItem (props: { name: BuildingName, cost: CostPlan, buildTime: number, requestBuild: (name: BuildingName) => void }) {
  return (
    <div className="list-item" onClick={() => props.requestBuild(props.name)}>
      <img className="list-icon" src={require(`../../assets/icons/building_${props.name}.png`)} alt={props.name} />
      <span className="list-name">{props.name}</span>
      <span className="list-cost">{Object.entries(props.cost).map(x => { return <span className="list-cost-item" key={x[0]}><img className="list-cost-icon" width="20px" src={require(`../../assets/icons/${x[0]}.png`)} alt={x[0]} />{x[1]}</span> })}</span>
    </div>
  )
}

export default ConstructionItem