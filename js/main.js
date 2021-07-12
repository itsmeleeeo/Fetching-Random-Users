let userImg = document.querySelector('.userImg');
let userName = document.querySelector('.userName');
let userEmail = document.querySelector('.userEmail');
let userCity = document.querySelector('.userCity');
let fetchMyUser = document.querySelector('#fetchMyUser');

fetchMyUser.addEventListener('click', () => {
        const apiUrl = 'https://randomuser.me/api/?results=1';
        fetch(apiUrl).then(res => res.json()).then(data => {
            let users = data.results;
            return users.map(user => {
                userImg.src = user.picture.medium;
                userName.textContent = user.name.first + " " + user.name.last;
                userEmail.textContent = user.email;
                userCity.textContent = user.location.city + ", " + user.location.state;
            });
            
        }).catch(err => {
            console.log(err)
        })
});