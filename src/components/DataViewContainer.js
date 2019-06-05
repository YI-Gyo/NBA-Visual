import React from 'react';
import { ShotChart } from './ShotChart';
import { Row, Col, Radio, Switch } from 'antd';
import { CountSlider } from "./CountSlider";
import _ from 'lodash';

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
			<div className={'data-view'}>
				<ShotChart
					playerId={this.props.playerId}
					minCount={minCount}
					displayToolTips={displayToolTips}
					chartType={chartType}
				/>

				<Row>
					<Col span={2} offset={3} className="filter-label">Shots:</Col>
					<Col offset={'4'} >
						<CountSlider onMinCountChange={_.debounce(this.onMinCountChange, 500)}/>
					</Col>
				</Row>

				<Row>
					<Col span="9" offset="6" >
						<RadioGroup value={chartType} onChange={this.onChartTypeChange}>
							<Radio value={'hexbin'}>Hexbin</Radio>
							<Radio value={'scatter'}>Scatter</Radio>
						</RadioGroup>
					</Col>
					<Col span={'3'}>
						<Switch onChange={this.onTooltipChange}
								checkedChildren="on"
								unCheckedChildren="off"
								defaultChecked
						/>
					</Col>
				</Row>

			</div>
		);
	}
}