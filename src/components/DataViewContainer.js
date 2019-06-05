import React from 'react';
import { ShotChart } from './ShotChart';
import { Slider, InputNumber, Row, Col, Radio, Switch } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
	state = {
		inputValue: 1,
	};

	onChange = value => {
		this.setState({
			inputValue: value,
		});
	};

	render() {
		const { inputValue } = this.state;
		return (
			<div className={'short-chart'}>
				<ShotChart playerId={this.props.playerId} minCount={2} displayTooTips={true} chartType={"hexbin"} />

				<Row>
					<Col span={12}>
						<Slider
							min={1}
							max={20}
							onChange={this.onChange}
							value={typeof inputValue === 'number' ? inputValue : 0}
						/>
					</Col>
					<Col span={4}>
						<InputNumber
							min={1}
							max={20}
							style={{ marginLeft: 16 }}
							value={inputValue}
							onChange={this.onChange}
						/>
					</Col>
				</Row>

				<RadioGroup>
					<Radio value={'hexbin'}>Hexbin</Radio>
					<Radio value={'scatter'}>Scatter</Radio>
				</RadioGroup>

				<Switch
					checkedChildren="on"
					unCheckedChildren="off"
					defaultChecked
				/>
			</div>
		);
	}
}