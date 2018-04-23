import faker from 'faker'
import fs from 'fs'
import path from 'path'

if (!fs.existsSync(path.join(__dirname, '..', 'data'))) {
  fs.mkdirSync(path.join(__dirname, '..', 'data'))
}

for (let j = 0; j < 5; j++) {
  let employees = []
  for (let i = 0; i < 20; i++) {
    const height = 140 + (faker.random.number() % 50)
    const weight = Math.ceil((22 + (faker.random.number() % 10 - 5)) * ((height / 100) ** 2))
    let employee = {
      id: i + 1,
      name: faker.name.findName(),
      email: faker.internet.email(),
      height,
      weight,
      gender: faker.random.number() % 2 === 0 ? 'male' : 'female'
    }
    employees.push(employee)
  }

  fs.writeFile(`data/employees${j + 1}.json`, JSON.stringify(employees), 'utf8', (err) => {
    if (err) throw err
    console.log('complete')
  })
}
