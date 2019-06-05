import React from 'react';
import { ShotChart } from './ShotChart';
import { Radio, Switch } from 'antd';
import { CountSlider } from "./CountSlider";

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
	state = {
		minCount: 2,
		displayToolTips: true,
		chartType: "hexbin",
	};


	onMinCountChange = (minCount) => {
		this.setState({
			minCount
		});
	}

	onChartTypeChange = (e) => {
		this.setState({
			chartType: e.target.value
		});
	}

	onTooltipChange = (displayToolTips) => {
		this.setState({
			displayToolTips,
		});
	}


	render() {
		const {
			minCount,
			displayToolTips,
			chartType,
		} = this.state;

		return (
			<div className={'short-chart'}>
				<ShotChart
					playerId={this.props.playerId}
					minCount={minCount}
					displayToolTips={displayToolTips}
					chartType={chartType} />

				<CountSlider onMinCountChange={this.onMinCountChange}/>

				<RadioGroup value={chartType} onChange={this.onChartTypeChange}>
					<Radio value={'hexbin'}>Hexbin</Radio>
					<Radio value={'scatter'}>Scatter</Radio>
				</RadioGroup>

				<Switch onChange={this.onTooltipChange}
					checkedChildren="on"
					unCheckedChildren="off"
					defaultChecked
				/>
			</div>
		);
	}
}