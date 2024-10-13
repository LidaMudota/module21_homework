const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber % 2 === 0) {
      resolve(`Завершено успешно. Сгенерированное число — ${randomNumber}`);
    } else {
      reject(`Завершено с ошибкой. Сгенерированное число — ${randomNumber}`);
    }
  }, 3000);
});

promise
  .then(successMessage => console.log(successMessage))
  .catch(errorMessage => console.log(errorMessage));