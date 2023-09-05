import { useState } from 'react'
import movieList from './movie-list.json'
import './App.css'

function getRandomMovieName() {
  const length = movieList.length
  return movieList[Math.floor(Math.random() * length)]
}

function App() {
  const [movieHistory, setMovieHistory] = useState<string[]>([
    getRandomMovieName(),
  ])

  return (
    <>
      <div className="card">
        <button
          onClick={() =>
            setMovieHistory([getRandomMovieName(), ...movieHistory])
          }
        >
          適当に映画を選ぶ
        </button>
      </div>
      {movieHistory.map((movieName) => {
        return (
          <>
            <h2>{movieName}</h2>
            <ul>
              <li>
                <a
                  href={`https://google.com/search?q=${movieName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google
                </a>
              </li>
              <li>
                <a
                  href={`https://www.amazon.co.jp/s?k=${movieName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon
                </a>
              </li>
              <li>
                <a
                  href={`https://video.unext.jp/freeword?query=${movieName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  U-NEXT
                </a>
              </li>
              <li>
                <a
                  href={`https://movie-tsutaya.tsite.jp/netdvd/dvd/searchDvdHmo.do?k=${movieName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TSUTAYA DISCAS
                </a>
              </li>
              <li>
                <a
                  href={`https://filmarks.com/search/movies?q=${movieName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Filmarks
                </a>
              </li>
            </ul>
          </>
        )
      })}
    </>
  )
}

export default App
