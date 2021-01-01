import React, {Component} from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component 
{
	state = {
	}

	render()
	{
		return(
			<div className="directory-menu">
				{
					this.state.sections.map(({id, ...otherSectionProps}) => (
						<MenuItem
							key={id}
							{...otherSectionProps}
						/>
					))
				}
			</div>
		);
	}
}

export default Directory;
