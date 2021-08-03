import React from 'react'
import quizData from '../../assets/data.json'
import '../../styles/style.css'

function Nav() {
  return (
    <nav>
      <p>Questions</p>
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
        <li className='nav__list-item'>
          <a href='#results' className='nav__link'>
            Results
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
