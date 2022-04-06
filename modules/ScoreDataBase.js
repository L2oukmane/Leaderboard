import Score from './ScoreClass';

const refreshBtn = document.querySelector('.refresh');
const scoreUl = document.getElementById('score');
const scoreForm = document.querySelector('.add-scores');
const nameValue = document.getElementById('name-value');
const scoreValue = document.getElementById('score-value');
const submitBtn = document.getElementById('submit-btn');

class ScoreDataBase {
    constructor() {
      this.scoreList = JSON.parse(localStorage.getItem('scoreStorage')) || [];
    }

    addScores(){
        submitBtn.addEventListener('click', () => {
            const currentScore = new Score (nameValue.value, scoreValue.value);
            this.scoreList.push(currentScore);
            this.showScore(nameValue.value, scoreValue.value);
            nameValue.value = '';
            scoreValue.value = '';
        });
        localStorage.setItem('scoreStorage', JSON.stringify(this.scoreList));
        this.localstorage();
    }

    showScore(name, score){
        if (name === '' || score === '') {
            submitBtn.removeEventListener('click', false, false);
          }
           scoreUl.innerHTML +=`<li>${name}:${score}</li>`;
           this.scoreList.forEach((Score) =>{
            this.showScore(Score.name, Score.score);
           });
           localStorage.setItem('scoreStorage', JSON.stringify(this.scoreList));
    }

    localstorage() {
        if (localStorage !== null) {
          const store = JSON.parse(localStorage.getItem('scoreStorage'));
          store.forEach((Score) => {
            this.showBook(Score.name, Score.score);
          });
        }
      }

}

export default ScoreDataBase;
