export type Indexable = string | number | symbol

export interface MineralsData {
	name: String,
	value: any,
}

export type MineralsOutput = {
	minerals: MineralsData[],
}
