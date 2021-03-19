import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'sudi@trycatch.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sudi Dav',
    email: 'sarah@trycatch.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Simba Petit',
    email: 'simba@trycatch.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
