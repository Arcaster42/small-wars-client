import { Building, GridType } from "../../types/game"
import '../../css/GridSquare.css'

function GridSquare (props: { type: Building | GridType, pos: { x: number, y: number }, isHighlighted: boolean, updateGrid: (pos: { x: number, y: number }) => void }) {
  return (
    isBuilding(props.type) ?
    <img className="icon-image" width="80px" src={require(`../../assets/icons/building_${props.type.name}.png`)} alt={props.type.name} onClick={() => props.updateGrid(props.pos)}/>
    : <div className={`grid-square ${props.type} ${props.isHighlighted ? "highlighted" : "none"}`} onClick={() => props.updateGrid(props.pos)}></div>
  )
}

const isBuilding = (input: Building | GridType): input is Building => {
    return (input as Building).buildTime !== undefined
}

export default GridSquare