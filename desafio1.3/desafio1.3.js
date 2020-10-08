const users = [
    {name: 'Carlos', tecnologies: ['HTML', 'CSS']},
    {name: 'Jasmine', tecnologies: ['Javascript', 'CSS']},
    {name: 'Tuane', tecnologies:['HTML', 'Node.js']},
    {name: 'Ricardo', tecnologies: ['HTML', 'CSS']}
]

for (let user of users) {
    console.log(`${user.name} trabalha com ${user.tecnologies.join(', ')}`)
}