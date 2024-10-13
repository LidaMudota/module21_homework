document.addEventListener("DOMContentLoaded", () => {
  const inputPage = document.getElementById("inputPage");
  const inputLimit = document.getElementById("inputLimit");
  const button = document.getElementById("requestButton");
  const message = document.getElementById("message");
  const imagesContainer = document.getElementById("imagesContainer");

  // Восстановление данных из localStorage при загрузке
  const savedData = localStorage.getItem("lastRequestImages");
  if (savedData) {
      displayImages(JSON.parse(savedData));
  }

  // Обработчик события на кнопку
  button.addEventListener("click", () => {
      const page = parseInt(inputPage.value);
      const limit = parseInt(inputLimit.value);
      message.textContent = "";
      imagesContainer.innerHTML = "";

      if (isNaN(page) || page < 1 || page > 10) {
          if (isNaN(limit) || limit < 1 || limit > 10) {
              message.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
          } else {
              message.textContent = "Номер страницы вне диапазона от 1 до 10";
          }
      } else if (isNaN(limit) || limit < 1 || limit > 10) {
          message.textContent = "Лимит вне диапазона от 1 до 10";
      } else {
          // Выполнение запроса
          const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
          fetch(url)
              .then(response => response.json())
              .then(data => {
                  displayImages(data);
                  localStorage.setItem("lastRequestImages", JSON.stringify(data));
              })
              .catch(error => {
                  message.textContent = "Ошибка при загрузке изображений.";
                  console.error("Ошибка запроса:", error);
              });
      }
  });

  // Функция отображения изображений
  function displayImages(images) {
      images.forEach(image => {
          const img = document.createElement("img");
          img.src = image.download_url;
          img.alt = image.author;
          img.width = 150;
          img.style.margin = "10px";
          imagesContainer.appendChild(img);
      });
  }
});