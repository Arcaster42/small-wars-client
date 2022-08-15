import '../../css/ConstructionCard.css'
import { BuildingName, CostPlan } from '../../types/game'

function ConstructionCard (props: { name: BuildingName, cost: CostPlan, buildTime: number, requestBuild: (name: BuildingName) => void }) {
  return (
    <div className="construction-card" onClick={() => props.requestBuild(props.name)}>
      <div className="building-icon">
        <img className="icon-image" width="80px" src={require(`../../assets/icons/building_${props.name}.png`)} alt={props.name}/>
        <div className="resource-overlay">
          {Array.from(Object.entries(props.cost)).map(x =>
            {return (
              <span className="resource-line" key={x[0]}>
                <img width="20px" src={require(`../../assets/icons/${x[0]}.png`)} alt={x[0]} />{x[1]}
              </span>
              )
            })}
          </div>
      </div>
    </div>
  )
}

export default ConstructionCard