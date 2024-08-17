const hamMenu = document.querySelector('.hamMenu');

const offScreenMenu = document.querySelector('.offScreenMenu');

hamMenu.addEventListener('click', () =>{
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active')
})


document.querySelector('.button').addEventListener('click', getFetch)
document.querySelector('.getPod').addEventListener('click', hideOrShow)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=i4ssxbZvqyRQwxTmBosC4LjBRQyogKWZSjO1AKsg&date=${choice}&thumbs=true`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
          if(data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
            document.querySelector('iframe').classList.add('hidden')
            document.querySelector('img').classList.remove('hidden')
            
          }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url 
            document.querySelector('img').classList.add('hidden')
            document.querySelector('iframe').classList.remove('hidden')
          }
        document.querySelector('h2').innerText = data.title
        document.querySelector('p').innerText = data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

let img = document.querySelector('.img');
let iframe = document.querySelector('.iframe');


//classList.toggle('hidden')