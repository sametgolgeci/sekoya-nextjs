import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sekoya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="col-md-3 col-sm-12 col-xs-12 sidebar">
          <div className="sidebar-logo">
            <img className="sidebar-logo-img" src="logo.png" alt="logo"/>
          </div>
          <div className="sidebar-items">
            <ul>
              <li className="sidebar-item">
                <Link href="#">Hakkımızda</Link>
              </li>
              <li className="sidebar-item">
                <Link href="#">Nasıl Çalışıyoruz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="#">Hizmetlerimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="#">Uygulamalarımız</Link>
              </li>
              <li className="sidebar-item">
                <Link href="#">İletişim</Link>
              </li>
            </ul> 
          </div>
          <div className="sidebar-social">
            <div className="sidebar-social-item">Ins</div>
            <div className="sidebar-social-item">Lin</div>
            <div className="sidebar-social-item">Beh</div>
          </div>
        </div>
        <div className="col-md-9 col-sm-12 col-xs-12 index">
          <div className="col-md-6 col-sm-12 col-xs-12 index-img">
            <img src="unsplash-1.jpg" alt="anasayfa"/>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 index-text">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p> laborum nesciunt possimus eum atque</p>
            <div className="index-button">
              <button type="button"><a href="#">??????????</a></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
