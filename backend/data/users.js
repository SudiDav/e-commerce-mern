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
    email: 'sudi@trycatch.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Simba Petit',
    email: 'sudi@trycatch.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
