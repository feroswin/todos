const db = require('../db')
const bcrypt = require('bcrypt')
const {hash} = require("bcrypt");


class UserController {

  // Создание нового пользователя
  createUser (req, res) {
    const {email, password, is_activated} = req.body

    // Проверка email на уже существующий
    db.query('SELECT email FROM users WHERE email = ?',[email], (err,result) => {
      if (err) console.log('Ошибка email')
      else if (result.length !== 0) res.send('Пользователь с таким email уже существует')
      else {
        const passHash = bcrypt.hashSync(password, 10)
        // Сохранение пользователя в БД
        db.query('INSERT INTO users (id, email, password, is_activated) VALUES (NULL,?,?,?)', [email, passHash, is_activated], (err, result) => {
          if(err) console.log(err)
          res.send('Пользователь успешно зарегистрирован')
        })
      }
    })
  }

  // Получение всех пользователей
  getUsers (req, res) {
    db.query('SELECT * FROM users', (err, result) =>{
      if(err) console.log(err)
      res.send(result)
    })
  }

  loginUser(req, res) {
    const {email, password} = req.body
    db.query('SELECT email, password FROM users WHERE email = ?', [email], (err, result) => {
      if (err) console.log(err)
      const validatePassword = bcrypt.compareSync(password, result[0].password)
      if (!validatePassword) res.send('Неверный пароль')
      else res.send('Пароль верный')
    })
  }
}

module.exports = new UserController()