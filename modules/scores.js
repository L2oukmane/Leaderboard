const scores =[
	{
		name: 'Alex',
		score: 120,
	},
	{
		name: 'Johny',
		score:200,
	},
	{
		name:'Kate',
		score:150,
	},
	{
		name:'Ahmed',
		score:200,
	},
];

const scoreList = document.getElementById('score-list');

const addScore = () => {
scores.forEach((score) => {
	const list = document.createElement('li');
	list.className = 'list-item';
	list.textContent = `${score.name}: ${score.score}`;
	scoreList.appendChild(list);
});
};

export default addScore;