const users = [{
        name: 'Carlos',
        tecnologies: ['HTML', 'CSS']
    },
    {
        name: 'Jasmine',
        tecnologies: ['Javascript', 'CSS']
    },
    {
        name: 'Tuane',
        tecnologies: ['HTML', 'Node.js']
    },
    {
        name: 'Ricardo',
        tecnologies: ['HTML', 'CSS']
    },
    {
        name: 'Ira',
        tecnologies: ['HTML', 'Javascript', 'CSS']
    }
]

for (let user of users) {
    console.log(`${user.name} work with ${user.tecnologies.join(', ')}`)
}

function checaSeUsuarioUsaCSS(user) {
    for (let tecnology of user.tecnologies) {
        if (tecnology == 'CSS')
        return true
    }
    return false
}

for (let i = 0; i < users.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(users[i]);

    if(usuarioTrabalhaComCSS) {
        console.log(`The user ${users[i].name} works with CSS`)
    }
}