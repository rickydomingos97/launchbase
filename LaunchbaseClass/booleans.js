const classA = [{
        name: "Ricardo",
        grade: 9.3
    },
    {
        name: "Irina",
        grade: 10
    },
    {
        name: "Charlene",
        grade: 10
    },
    {
        name: "Fatima",
        grade: 7
    },
]

const classB = [{
        name: "Marcelo",
        grade: 3
    },
    {
        name: "Mateus",
        grade: 1
    },
    {
        name: "Everton",
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average.toFixed(2)}. Great job!`)
    } else {
        console.log(`${turma} average: ${average.toFixed(2)} is not enough good`)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} flunked`)
    }
}

function studentsFlunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsFlunkeds(classA)
studentsFlunkeds(classB)