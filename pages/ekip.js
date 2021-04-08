import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare,faLinkedin,faBehanceSquare } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream } from '@fortawesome/free-solid-svg-icons'

export default function Ekip() {
  return (
    <div>
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Ekibimiz</title>
        <link rel="icon" href="/favicon.ico"/>
        
      </Head>
      <main>
        <div className="col-md-3 col-sm-12 col-xs-12 sidebar">
          <div className="sidebar-logo">
            <Link href="/"><a>
              <img className="sidebar-logo-img" src="logo-2.png" alt="logo"/>
            </a></Link>
          </div>
          <div className="sidebar-items">
            <ul>
              <li className="sidebar-item active">
                <Link href="/ekip">Ekibimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/nasil-calisiyoruz">Nasıl Çalışıyoruz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/uygulamalarimiz">Uygulamalarımız</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/iletisim">İletişim</Link>
              </li>
            </ul> 
          </div>
          <div className="sidebar-social">
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faInstagramSquare}/></a></div>
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faLinkedin}/></a></div>
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faBehanceSquare}/></a></div>
          </div>
        </div>
        <div className="col-md-9 col-sm-12 col-xs-12 ekip">
          <h1>Ekibimiz</h1>
          <div className="container">
            <div className="ekip-items">
              <div className="ekip-item">
                <div className="col-md-2 ekip-item-img">
                  <img src="profil.jpg" alt="profil"/>
                </div>
                <div className="col-md-10 ekip-item-text">
                  <p><strong>Ad Soyad</strong>, Unvan</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos ipsam maxime voluptas fugiat suscipit vitae modi ut iure pariatur delectus qui cum quaerat,</p>
                </div>
              </div>
              <div className="ekip-item-negative">
                <div className="col-md-2 ekip-item-img">
                  <img src="profil.jpg" alt="profil"/>
                </div>
                <div className="col-md-10 ekip-item-text">
                  <p><strong>Ad Soyad</strong>, Unvan</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos ipsam maxime voluptas fugiat suscipit vitae modi ut iure pariatur delectus qui cum quaerat,</p>
                </div>
              </div>
              <div className="ekip-item">
                <div className="col-md-2 ekip-item-img">
                  <img src="profil.jpg" alt="profil"/>
                </div>
                <div className="col-md-10 ekip-item-text">
                  <p><strong>Ad Soyad</strong>, Unvan</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos ipsam maxime voluptas fugiat suscipit vitae modi ut iure pariatur delectus qui cum quaerat,</p>
                </div>
              </div>
              <div className="ekip-item-negative">
                <div className="col-md-2 ekip-item-img">
                  <img src="profil.jpg" alt="profil"/>
                </div>
                <div className="col-md-10 ekip-item-text">
                  <p><strong>Ad Soyad</strong>, Unvan</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos ipsam maxime voluptas fugiat suscipit vitae modi ut iure pariatur delectus qui cum quaerat,</p>
                </div>
              </div>
              <div className="ekip-item">
                <div className="col-md-2 ekip-item-img">
                  <img src="profil.jpg" alt="profil"/>
                </div>
                <div className="col-md-10 ekip-item-text">
                  <p><strong>Ad Soyad</strong>, Unvan</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos ipsam maxime voluptas fugiat suscipit vitae modi ut iure pariatur delectus qui cum quaerat,</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )  
}


