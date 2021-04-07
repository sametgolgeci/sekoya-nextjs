/*import Head from 'next/head'
import Link from 'next/link'

export default function Hakkımızda() {
  return (
    <div>
      <Head>
        <title>Sekoya | Hakkımızda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navigation">
        <div className="navigation-logo">
          <Link href="/"><a>LOGO</a></Link>
        </div>
        <div className="navigation-nav">
          <ul class="nav">
            <li class="nav-item">
              <Link href="/hakkimizda"><a class="nav-link active" aria-current="page">Hakkımızda</a></Link>
            </li>
            <li class="nav-item">
              <Link href="/nasil-calisiyoruz"><a class="nav-link">Nasıl Çalışıyoruz</a></Link>
            </li>
            <li class="nav-item">
              <Link href="/hizmetlerimiz"><a class="nav-link">Hizmetlerimiz</a></Link>
            </li>
            <li class="nav-item">
              <Link href="/uygulamalarimiz"><a class="nav-link">Uygulamalarımız</a></Link>
            </li>
            <li class="nav-item">
              <Link href="#"><a class="nav-link">İletişim</a></Link>
            </li>
             <li class="nav-item">
              <Link href="#"><a class="nav-link">TR | EN</a></Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Biz Kimiz?</h1>
        <div className="about-main">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <h1>Ekibimiz 1</h1>
        <div className="container">
          <div class="row justify-content-md-center">
            <div class="kolon b">
              <img src="profil.jpg" class="rounded-circle" alt="..."/>
              <p><strong>1 of 5</strong></p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            <div class="kolon b">
              <img src="background.jpg" class="rounded-circle" alt="..."/>
              <p><strong>2 of 5</strong></p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            <div class="kolon b">
              <img src="backgroung-2.jpeg" class="rounded-circle" alt="..."/>
              <p><strong>3 of 5</strong></p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            <div class="kolon b">
              <img src="deneme.jpeg" class="rounded-circle" alt="..."/>
              <p><strong>4 of 5</strong></p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            <div class="kolon b">
              <img src="profil.jpg" class="rounded-circle" alt="..."/>
              <p><strong>5 of 5</strong></p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
          </div>
        </div>
        <h1>Ekibimiz 2</h1>
        <div className="container">
          <div class="row justify-content-md-center">
            <div class="col-md-3 b">
              <img src="profil.jpg" class="rounded-circle" alt="..."/>
              <p><strong>1 of 3</strong></p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            <div class="col-md-3 b">
              <img src="profil.jpg" class="rounded-circle" alt="..."/>
              <p><strong>2 of 3</strong></p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            <div class="col-md-3 b">
              <img src="profil.jpg" class="rounded-circle" alt="..."/>
              <p><strong>3 of 3</strong></p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
          </div>
          <div class="row justify-content-md-center">
            <div class="col-md-3 b">
              <img src="profil.jpg" class="rounded-circle" alt="..."/>
              <p><strong>1 of 2</strong></p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            <div class="col-md-3 b">
              <img src="profil.jpg" class="rounded-circle" alt="..."/>
              <p><strong>2 of 2</strong></p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
          </div>
        </div>
        <h1>Ekibimiz 3</h1>
        <div class="containerr">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="profil.jpg"/>
                    <h3>1 of 5</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="background.jpg"/>
                    <h3>2 of 5</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>  
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="backgroung-2.jpeg"/>
                    <h3>3 of 5</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="background.jpg"/>
                    <h3>4 of 5</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="background.jpg"/>
                    <h3>5 of 5</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                </div>
            </div>
        </div>
    </div>
      </div>
    </div>
  )
}*/

import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare,faLinkedin,faBehanceSquare } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Ekibimiz</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"/>
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
                  <p><strong>Ad Soyad</strong>, unvan</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos ipsam maxime voluptas fugiat suscipit vitae modi ut iure pariatur delectus qui cum quaerat,</p>
                </div>
              </div>
              <div className="ekip-item-negative">
                <div className="col-md-2 ekip-item-img">
                  <img src="profil.jpg" alt="profil"/>
                </div>
                <div className="col-md-10 ekip-item-text">
                  <p><strong>Ad Soyad</strong>, unvan</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos ipsam maxime voluptas fugiat suscipit vitae modi ut iure pariatur delectus qui cum quaerat,</p>
                </div>
              </div>
              <div className="ekip-item">
                <div className="col-md-2 ekip-item-img">
                  <img src="profil.jpg" alt="profil"/>
                </div>
                <div className="col-md-10 ekip-item-text">
                  <p><strong>Ad Soyad</strong>, unvan</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos ipsam maxime voluptas fugiat suscipit vitae modi ut iure pariatur delectus qui cum quaerat,</p>
                </div>
              </div>
              <div className="ekip-item-negative">
                <div className="col-md-2 ekip-item-img">
                  <img src="profil.jpg" alt="profil"/>
                </div>
                <div className="col-md-10 ekip-item-text">
                  <p><strong>Ad Soyad</strong>, unvan</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos ipsam maxime voluptas fugiat suscipit vitae modi ut iure pariatur delectus qui cum quaerat,</p>
                </div>
              </div>
              <div className="ekip-item">
                <div className="col-md-2 ekip-item-img">
                  <img src="profil.jpg" alt="profil"/>
                </div>
                <div className="col-md-10 ekip-item-text">
                  <p><strong>Ad Soyad</strong>, unvan</p>
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


