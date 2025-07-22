import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Study"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={faBriefcase}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">22-school in Namangan</div>
							<div className="work-subtitle">
								11-years
							</div>
							<div className="work-duration">2015 - 2026</div>
						</div>

						<div className="work">
							<img
								src={faBriefcase}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Start 21 in Namangan</div>
							<div className="work-subtitle">
								1-year | English
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
