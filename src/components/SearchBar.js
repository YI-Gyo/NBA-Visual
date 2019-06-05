import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

const { Option } = AutoComplete.Option;
export class SearchBar extends React.Component {
	state= {
		dataSource: [],
	}

	onSelect = (playerName) => {
		this.props.loadPlayerInfo(playerName);
	}

	render() {
		const { dataSource } = this.state;

		return (
			<AutoComplete
				className="search-bar"
				size="large"
				dataSource={dataSource}
				onSelect={this.onSelect}
				onSearch={this.handleSearch}
				placeholder="Search NBA Players"
				optionLabelProp="value"
			>
				<Input
					suffix={<Icon type="search" className="certain-category-icon" />}
				/>
			</AutoComplete>

		);
	}
}