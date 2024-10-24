const keywordInput = document.getElementById('keyword');
const getUrlsButton = document.getElementById('getUrls');
const urlsContainer = document.getElementById('urlsContainer');
const downloadStatus = document.getElementById('downloadStatus');
const contentContainer = document.getElementById('contentContainer');

getUrlsButton.addEventListener('click', async () => {
 const keyword = keywordInput.value;
 try {
  const response = await fetch('/urls', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json'
   },
   body: JSON.stringify({ keyword })
  });
  const urls = await response.json();
  displayUrls(urls);
 } catch (error) {
  displayError(error);
 }
});

function displayUrls(urls) {
 urlsContainer.innerHTML = '';
 urls.forEach((url, index) => {
  const urlElement = document.createElement('div');
  urlElement.textContent = url;
  urlElement.addEventListener('click', () => {
   downloadContent(url);
  });
  urlsContainer.appendChild(urlElement);
 });
}

function downloadContent(url) {
 downloadStatus.innerHTML = 'Загрузка...';
 const downloadPromise = fetch('/download', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify({ url })
 });
 downloadPromise.then(response => response.json())
  .then(data => {
   downloadStatus.innerHTML = 'Загрузка завершена';
   contentContainer.innerHTML = data.content;
   localStorage.setItem(url, data.content);
  })
  .catch(error => displayError(error));
}

function displayError(error) {
 downloadStatus.innerHTML = 'Ошибка: ' + error.message;
}
