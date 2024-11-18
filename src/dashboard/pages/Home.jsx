import React from 'react'

export const Home = () => {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const role = localStorage.getItem('role');
  return (
    <h1>
      Bienvenid@ {name} - {role == "ADMIN_ROLE" ? " Adminidtrador " : " Usuarios "}
    </h1>

  )
}
