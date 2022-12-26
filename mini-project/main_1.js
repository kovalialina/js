let url = new URL(location.href);
console.log(url)
let id = url.searchParams.get("id");
console.log(id)
let apiURL = 'https://jsonplaceholder.typicode.com/users/';

fetch(apiURL + id)
    .then(value => value.json())
    .then(value => {
        for (const item in value) {
const userDiv = document.createElement('div');
if (typeof value[item] !== 'object'){

 userDiv.innerText = `${item} : ${value[item]}`
}else{
    userDiv.innerText = `${item} :`;
    for (const key in value[item]) {
        const userInnerDiv = document.createElement('div');
        if (typeof value[item][key] !== 'object') {
            userInnerDiv.innerText = `${key} -- ${value[item][key]}`;

        } else {
            userInnerDiv.innerText = `${key} :`;

            for (const element in value[item][key]) {
                let htmlDivElement = document.createElement('div');
                if (typeof value[item][key][element] !== 'object'){
                    htmlDivElement.innerText = `${element} -- ${value[item][key][element]}`;
                }
                userInnerDiv.append(htmlDivElement);
            }
        }
        userDiv.append(userInnerDiv);
    }
}
            document.body.append(userDiv);
        }
    })


let button = document.createElement("button");
button.innerText = "post of current user"
document.body.append(button)

button.onclick = function (){
    fetch(apiURL +id + `/posts`)
        .then(value => value.json())
        .then(posts =>{
            for (const post of posts) {
                let divPost = document.createElement('div');
                divPost.innerText = `${post.title}`
                document.body.append(divPost)

                let button2 = document.createElement('button');
                button2.innerText = ' '
                divPost.append(button2)

                let a = document.createElement('a');
                a.href = 'post-details.html?id=' + post.id;
                a.innerText = 'more'
                button2.append(a)
            }
        })
}

