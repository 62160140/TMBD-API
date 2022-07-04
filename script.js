const apiKey = 'c311ea48d602ea0dc748177ff03a3d86'
let year = 2020
const url = `https://api.themoviedb.org/3/discover/movie?api_key=
${apiKey}&language=en-US&sort_by=popularity.desc&page=1&year=${year}&with_watch_monetization_types=flatrate`
const content = document.getElementById('content')
const urlPoster= 'https://image.tmdb.org/t/p/w500/'
const dropdown = document.getElementById('years')


async function displayMovies(url){
    const  res =  await fetch(url);
    const data = await res.json()

      // clear contentEl
    clearContentEl()    
    
    data.results.forEach(element => {
      const movieEl = document.createElement('div')
      movieEl.classList.add('movie')
      const title = document.createElement('h2')
      const poster = document.createElement('img')
      poster.src = `${urlPoster+element.poster_path}`


      title.innerHTML = `${element.title.substring(0,24)}`
      movieEl.appendChild(title)
      movieEl.appendChild(poster)

      content.appendChild(movieEl)
    });
}

dropdown.addEventListener('change',(e)=>{
  year=e.target.value
  const updateUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&year=${year}&with_watch_monetization_types=flatrate`
  // console.log(updateUrl);
  displayMovies(updateUrl
    )
})


displayMovies(url)

function clearContentEl() {
  while (content.firstChild) {
    content.removeChild(content.firstChild)
  }
}
