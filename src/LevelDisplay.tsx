export function LevelDisplay(params: LevelDisplayParams) {
	return (
		<>
			<div>
				<span>Current Level: {params.level + 1}</span>
			</div>
		</>
	)
}

export interface LevelDisplayParams {
	level: number;
}

export default LevelDisplay;