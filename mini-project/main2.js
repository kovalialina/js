let url2 = new URL (location.href);
let post = url2.searchParams.get("id");
let parsePost = JSON.parse(post);
console.log(parsePost)

fetch('https://jsonplaceholder.typicode.com/posts/' +post)
.then(value => value.json())
.then(value => {
    for (const item in value) {
        let htmlDivElement = document.createElement('div');
        htmlDivElement.innerText = `${item} : ${value[item]}`
        document.body.append(htmlDivElement)
    }
})

let button = document.createElement('button');
document.body.append(button);
button.innerText = 'comments'

let url = new URL(location.href);
let id = url.searchParams.get('id');
let parseCom = JSON.parse(id);

button.onclick = function (){
fetch('https://jsonplaceholder.typicode.com/comments/' + id)
.then(value => value.json())
.then(value2 => {
    for (const value2Key in value2) {
        let divComments = document.createElement('div');
        divComments.innerText = `${value2Key} : ${value2[value2Key]}`
        document.body.append(divComments)
    }
})

}
