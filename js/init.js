/**
 * Loads a local JSON file and returns the JSON as Promise.
 *
 * @param url
 * @returns {Promise<string>}
 */
async function loadJsonFile (url) {
  const res = await fetch(url);
  return await res.json();
}

/**
 * Renders a card
 * @param data
 */
function renderCard(data) {
  return `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.language}</h6>
        <p class="card-text">${data.description}</p>
        <a target="_blank" href="${data.url}" class="card-link">Repo</a>
      </div>
    </div>`;
}

loadJsonFile('./data/repositories.json')
  .then(
    (json) => {
      return json
        .map((repo) => {
          if (!repo.archived) {
            return {
              name: repo.name,
              language: repo.language,
              url: repo.html_url,
              description: repo.description,
              fork: repo.fork,
              watchers: repo.watchers,
              forks: repo.forks,
            };
          }
        })
        .filter(n => n)
    })
  .then((data) => {
    let projects = '';
    data.forEach((repo) => {
      projects += renderCard(repo);
    });
    document.getElementById('maibornwolff-opensource-projects').innerHTML += projects;
  });