import { useDispatch, useSelector } from 'react-redux'
import { GameState } from '../store/game'
import { BuildingName, BuildingPlan, GridType, Resource, Town } from '../types/game'
import ResourceCard from './ui/ResourceCard'
import ActionCard from './ui/ActionCard'
import ConstructionItem from './ui/ConstructionItem'
import '../css/Game.css'
import React, { useState } from 'react'
import { socketEmit } from '../store/account'
import GridSquare from './ui/GridSquare'

function Game () {
  const town: Town | null = useSelector((state: GameState) => state.game.town)
  const [posSelection, updatePosSelection] = useState({ x: 0, y: 0 })
  const [menu, updateMenu] = useState('none')
  const dispatch = useDispatch()
  const requestBuild = (buildingName: BuildingName) => {
    const plan: BuildingPlan | undefined = town?.blueprints.filter(x => x.name === buildingName)[0]
    if (!plan || !town) return
    for (const cost of Object.entries(plan.cost) as [Resource, number][]) {
      if (town.resources[cost[0]] <= cost[1]) return
    }
    dispatch(socketEmit('build', { buildingName, pos: posSelection }))
  }

  function getGridStyle (): React.CSSProperties {
    return {
      gridTemplateColumns: `repeat(${town?.grid.length || 10}, 50px)`,
      gridTemplateRows: `repeat(${town?.grid[0].length || 10}, 50px)`,
    }
  }

  function sortResources () {
    if (town)
      return {
        pop_settlers: town.resources.pop_settlers,
        res_food: town.resources.res_food,
        res_lumber: town.resources.res_lumber,
        res_stone: town.resources.res_stone,
        res_coins: town.resources.res_coins,
        res_weapons: town.resources.res_weapons,
        res_wheat: town.resources.res_wheat,
        res_meat: town.resources.res_meat,
        res_wood: town.resources.res_wood,
        res_iron: town.resources.res_iron,
        res_gold: town.resources.res_gold
      }
    return {}
  }

  if (town) {
    return (
      <div className="game-wrapper">
        <div className={"grid-wrapper"} style={getGridStyle()}>
          {
            town.grid.map((gridRow, y: number) => gridRow.map((square: GridType, x: number) => { return <GridSquare type={square} pos={{ x, y }} isHighlighted={posSelection.x === x && posSelection.y === y} updateGrid={updatePosSelection} key={`x${x} y${y}`} />} ))
          }
        </div>
        <div className="resource-wrapper">
          {
            Array.from(Object.entries(sortResources())).map(x => 
              { return <ResourceCard name={x[0]} value={x[1]} key={x[0]} /> })
          }
        </div>
        <div className="construction-wrapper">
          {
            town.blueprints.map(x =>
              { return <ConstructionItem name={x.name} cost={x.cost} buildTime={x.buildTime} requestBuild={requestBuild} key={x.name} />})
          }
        </div>
        <div className="action-wrapper">
          {
            actions.map(x =>
              { return <ActionCard name={x} updateMenu={updateMenu} key={x} /> })
          }
        </div>
      </div>
    )
  }
  return <div></div>
}

const actions = ['build', 'attack']

export default Game