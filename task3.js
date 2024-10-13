window.onload = function() {
  const name = localStorage.getItem('name');
  const lastVisit = localStorage.getItem('lastVisit');
  const currentDate = new Date().toLocaleString();

  if (!name) {
    const userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    localStorage.setItem('name', userName);
    localStorage.setItem('lastVisit', currentDate);
  } else {
    alert(`Добрый день, ${name}! Давно не виделись. В последний раз вы были у нас ${lastVisit}`);
    localStorage.setItem('lastVisit', currentDate);
  }
};