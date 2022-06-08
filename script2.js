fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=27zVN0hF2BduvX3mM5W8P3yKDdrmjMRr')
    .then(response => response.json())
    .then(result => {
        console.log(result);
        let data = result;

        Object.keys(data).forEach((item, key) => {

            let arr = data.results;
            arr.forEach(item => {
                console.log(data.results[key].content);
                let div = document.getElementById('app');
                let img = document.createElement('img');
                let h1 = document.createElement('h1');
                let p = document.createElement('p');
                let cont = document.createElement('div');
                let section = document.createElement('p');
                // let button = document.createElement('a')
                // button.classList.add('btn', 'btn-primary')

                section.innerText = item.section;
                h1.innerHTML = item.title;
                p.innerHTML = item.abstract;
                img.src = item.multimedia[1].url // [1] pozicija eilutes tam array is kurio imam, nes imam is array kuris yra results array viduje
                // if (item.multimedia[1] !== 'null'){item.url}
                // button.innerHTML = item.url
                cont.setAttribute('class', 'cont');
                section.setAttribute('class', 'section');

                cont.appendChild(h1);
                cont.appendChild(section);
                cont.appendChild(p);
                cont.appendChild(img);
                // cont.appendChild(button);

                const visit = () => {
                    location.href = item.url;
                    preventDefault();  
                }
                cont.onclick = () => {
                    visit();
                }
                div.appendChild(cont);
            })
        });
    });


//jeigu nera info. det if, ir kad nerodytu info (array methods index of ir t.t)
