import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'

const Cute = () => {
  const [data, setData] = useState([])

  function getColor() {
    var hue = Math.floor(Math.random() * 360);
    var pastel = 'hsl(' + hue + ', 100%, 80%)';
    return pastel
  }

  useEffect(() => {
    setTimeout(() => {
      const rand = Math.random()
      let word = 'ทำไมฟ้าน่ารักจัง'
      if (rand <= 0.5) word = 'ทำไมฟ้าใจดีจัง'
      setData([...data, { word, color: getColor(), top: Math.floor(Math.random() * window.innerHeight), left: Math.floor(Math.random() * window.innerWidth) }])
    }, 600)
  }, [data])

  useEffect(() => {

  }, [])
  return <Fragment>
    <Head>
      <title>ทำไมฟ้าน่ารักจัง</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content="Why fah is so cute"></meta>
    </Head>
    <div className="container">
      {data.map((el, index) => {
        return <p key={index} style={{
          color: el.color, position: 'absolute',
          top: el.top,
          left: el.left,
          transform: 'translate(-50%, -50%)'
        }}>{el.word}</p>
      })}
    </div>
    <style jsx>{`
      .container{
        width: 100vw;
        height: 100vh;
      }
    `}</style>
  </Fragment>
}

export default Cute