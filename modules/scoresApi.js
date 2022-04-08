const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'
const gameId = 'V83c8NBjJ3i8eCzKJ7qO'

const addScore = async (user, score) => {
  await fetch(`${BASE_URL}games/${gameId}/scores/`, {
    method: 'POST',
    body: JSON.stringify(
      {
        user,
        score,
      }
    ),
		headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(res => res.json()).then(data => console.log(data))
}

 addScore('fe,i', 59)
const getScore = async () => {
  await fetch(`${BASE_URL}games/${gameId}/scores/`).then(res => res.json()).then(data => console.log(data))
}

getScore()