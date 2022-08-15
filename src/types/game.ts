export interface Town {
  resources: { [key in Resource]: number }
  buildings: Building[]
  grid: (Building | 'empty')[][]
  blueprints: BuildingPlan[]
}

export interface BuildingPlan {
  name: BuildingName
  hitpoints: number
  defense: number
  efficiency: number
  cost: CostPlan
  buildTime: number
  cycleAction?: (town: Town) => void
}

export interface Building {
  id: number
  pos: { x: number, y: number }
  name: BuildingName
  defense: number
  efficiency: number
  cost: CostPlan
  buildTime: number
  cycleCounter: number
  cycleThreshold: number
  cycleAction?: (town: Town) => void
}

export type BuildingName = 'town_center' | 'house' | 'farm' | 'hunting_lodge' | 'woodcutter' | 'lumber_yard' | 'quarry' | 'iron_mine' | 'gold_mine' | 'bakery' | 'butcher' | 'barracks'
export type Resource = 'res_food' | 'res_wheat' | 'res_wood' | 'res_meat' | 'res_weapons' | 'res_coins' | 'res_lumber' | 'res_stone' | 'pop_settlers' | 'res_iron' | 'res_gold'
export type CostPlan = { [key in Resource]?: number }

export type GridType = Building | 'empty' | 'settler'