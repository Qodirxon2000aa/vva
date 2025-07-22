import React from "react";

function article_1() {
	return {
		date: "22.07.2025",
		title: "I started working towards getting into PDP University.",
		description:
			"I started working towards getting into PDP University from today and I think I will succeed.......",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">I started working towards getting into PDP University from today, and I truly believe I will succeed. This goal represents an important step in my journey as a developer and a lifelong learner. I’m committed to sharpening my technical skills, deepening my knowledge, and challenging myself every day to become the best version of myself.

With consistent effort, discipline, and a strong passion for technology, I’m confident that I can meet the requirements and earn my place at PDP University — a place where I can grow, connect with like-minded individuals, and unlock new opportunities for my future career.</div>
					<br></br>
					<img
						src="https://university.pdp.uz/static/media/desktop.9f979719fffcfbf29a06.jpeg"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "2025.06.20",
		title: "I passed the CEFR exam with a B2 level.",
		description:
			"I passed the CEFR exam with a B2 level. I think this is a great achievement for me............",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>I passed the CEFR exam with a B2 level, which I consider a significant achievement in my personal and professional growth. Reaching this level means I can confidently communicate in English in both written and spoken forms, participate in discussions, and understand complex texts and ideas.

This accomplishment not only reflects my dedication to learning but also strengthens my ability to work in international environments, collaborate with global teams, and access a wide range of resources in the tech industry.</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
