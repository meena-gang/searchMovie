let btn = document.querySelector('button');
let search = document.querySelector('input');
let display = document.getElementById('fetchedData');
let thead = document.querySelector('thead');
let tbody = document.querySelector('tbody');
let err = document.getElementById('errText');
btn.addEventListener('click',searchMovie);
function searchMovie(e){
    e.preventDefault();
    searchTerm = search.value;
    tbody.innerHTML = '';
    err.textContent = ''; 
    let url = `http://www.omdbapi.com/?t=${searchTerm}&apikey=40a6c430`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.Error){
            thead.style.display = 'none';
            err.textContent = data.Error;
        }
        else{
            console.log('xyz');
            thead.style.display = 'table-header-group';
             let obj = {
                title : data.Title,
                year : data.Year,
                actors : data.Actors,
                ratings : data.Ratings[0].Value,
                language : data.Language,
                genre : data.Genre
            }
            let tr = document.createElement('tr');
            for(let key in obj){
                let td = document.createElement('td');
                td.textContent = obj[key];
                tr.append(td);
            }
            tbody.append(tr);
        }
        search.value = ""; 

    })

}