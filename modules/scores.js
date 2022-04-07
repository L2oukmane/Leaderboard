const scores = [
  {
    name: 'Alex',
    score: 120,
  },
  {
    name: 'Johny',
    score: 200,
  },
  {
    name: 'Kate',
    score: 150,
  },
  {
    name: 'Ahmed',
    score: 200,
  },
  {
    name: 'Ali',
    score: 220,
  },
  {
    name: 'Talha',
    score: 250,
  },
  {
    name: 'Nabil',
    score: 100,
  },
  {
    name: 'Lynette',
    score: 230,
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