import { Fragment, useState } from 'react'
import moment from 'moment';
import Confetti from 'react-confetti'
import { useEffect } from 'react/cjs/react.development';
import Head from "next/head";
const Dating = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);
  const [diff, setDiff] = useState([]);
  const word = ['months', 'days', 'hours', 'minutes', 'seconds'];

  const handleResize = (e) => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
    window.addEventListener("resize", handleResize);
    return () => { window.addEventListener("resize", handleResize); };
  }, [])

  useEffect(() => {
    setInterval(() => {
      var a = moment();
      var b = moment([2021, 3, 21]);
      const month = a.diff(b, 'months')
      const day = a.diff(b, 'days') % 30
      const hour = a.diff(b, 'hours') % 24
      const minute = a.diff(b, 'minutes') % 60
      const second = a.diff(b, 'seconds') % 60
      setDiff([month, day, hour, minute, second])
    }, 500)
  }, [])

  const renderPage = () => {
    if (diff.length === 0) return null;
    return <Fragment>
      <Confetti
        width={windowWidth}
        height={windowHeight}
        numberOfPieces={200}
        opacity={0.4}

      />
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Boy is dating with Fah for</h1>
        <div style={{ display: 'flex' }}>
          {diff.map((el, index) => {
            return <div key={index} className="t">
              <h1>{el}</h1>
              <div>
                {word[index]}
              </div>
            </div>
          })}
        </div>

      </div>
      <style jsx>{`
      .t{
        width: 80px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;          
      }
      .container{
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      `}</style>
    </Fragment>
  }

  return (
    <Fragment>
      <Head>
        <title>Dating</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Dating"></meta>
      </Head>
      {renderPage()}
    </Fragment>

  )
}

export default Dating;