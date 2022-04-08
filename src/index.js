import './style.css';

import { addScore, getScore } from '../modules/scoresApi.js';

const refreshBtn = document.querySelector('#refresh');
const form = document.querySelector('.add-scores');
const scoresList = document.getElementById('score-list');
const name = document.getElementById('name-value');
const score = document.getElementById('score-value');
const loadScores = () => {
  document.querySelector('.rotate-refresh').style.display = 'inline-block';
  getScore().then((data) => {
    const scores = data.result;
    scoresList.innerHTML = '';
    scores.forEach((item) => {
      scoresList.innerHTML += `<li>${item.user}: ${item.score}</li>`;
    });
  });
  setTimeout(() => { document.querySelector('.rotate-refresh').style.display = 'none'; }, 1500);
};

refreshBtn.addEventListener('click', () => {
  loadScores();
});

window.addEventListener('load', () => {
  loadScores();
});

form.addEventListener('submit', async (e) => {
  const success = document.querySelector('.success');
  e.preventDefault();
  document.querySelector('.rotate-submit').style.display = 'inline-block';
  await addScore(name.value, score.value).then(() => {
    success.textContent = `${name.value}'s score added successfully!`;
    setTimeout(() => {
      success.style.display = 'none';
    }, 2500);
  });
  form.reset();
  setTimeout(() => { document.querySelector('.rotate-submit').style.display = 'none'; }, 1000);
  loadScores();
});
