import React from 'react'
import quizData from '../../assets/data.json'
import '../../styles/style.css'

function Nav() {
  return (
    <nav>
      <ul className='nav__list'>
        {quizData.map((data, i) => {
          return (
            <li className='nav__list-item'>
              <a className='nav__link' href={`#${data.id}`}>
                {i + 1}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav