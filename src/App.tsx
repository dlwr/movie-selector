import { useState } from 'react'
import movieList from './movie-list.json'
import './App.css'
import encoding from 'encoding-japanese'

function getRandomMovieName() {
  const length = movieList.length
  return movieList[Math.floor(Math.random() * length)]
}

function convertStringToShiftJisArray(str: string) {
  const unicodeArray = []
  for (let i = 0; i < str.length; i++) {
    unicodeArray.push(str.charCodeAt(i))
  }
  // Shift_JISに変換
  const sjisArray = encoding.convert(unicodeArray, {
    to: 'SJIS',
    from: 'UNICODE',
  })
  // SJISのキーワードをURLエンコード
  return encoding.urlEncode(sjisArray)
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
                  href={`https://google.com/search?q=${encodeURIComponent(
                    movieName
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google
                </a>
              </li>
              <li>
                <a
                  href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(
                    movieName
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon
                </a>
              </li>
              <li>
                <a
                  href={`https://video.unext.jp/freeword?query=${encodeURIComponent(
                    movieName
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  U-NEXT
                </a>
              </li>
              <li>
                <a
                  href={`https://movie-tsutaya.tsite.jp/netdvd/dvd/searchDvdHmo.do?k=${convertStringToShiftJisArray(
                    movieName
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TSUTAYA DISCAS
                </a>
              </li>
              <li>
                <a
                  href={`https://filmarks.com/search/movies?q=${encodeURIComponent(
                    movieName
                  )}`}
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
