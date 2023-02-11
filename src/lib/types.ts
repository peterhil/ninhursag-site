export type Indexable = string | number | symbol

export interface MineralsData {
	name: String,
	url: String,
}

export type MineralsOutput = {
	minerals: MineralsData[],
}
