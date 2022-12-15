// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let target = document.getElementsByClassName('target')[0];
fetch('http://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    for (const user of data) {
        let liName = document.createElement('li');
        let a = document.createElement('a');
        a.innerText = `${user.id} ${user.name}`;
        liName.appendChild(a)
        a.href = 'details.html?id=' + user.id
        target.append(liName)



    }


})