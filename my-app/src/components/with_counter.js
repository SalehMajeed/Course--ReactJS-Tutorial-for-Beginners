import React from 'react';

const updated_component = OriginalComponent => {
	class NewComponent extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				count: 0,
			};
		}

		increment_count = () => {
			this.setState(prevState => {
				return { count: prevState.count + 1 };
			});
		};

		render() {
			return <OriginalComponent count={this.state.count} increment_count={this.increment_count} />;
		}
	}
	return NewComponent;
};

export default updated_component;
