import Head from 'next/head'
import Link from 'next/link'

export default function Hizmetlerimiz() {
  return (
    <div>
      <Head>
        <title>Sekoya | Hizmetlerimiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navigation">
        <div className="navigation-logo">
          <Link href="/"><a>LOGO</a></Link>
        </div>
        <div className="navigation-nav">
          <ul class="nav">
            <li class="nav-item">
              <Link href="/hakkimizda"><a class="nav-link">Hakkımızda</a></Link>
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
      <h1>Hizmetlerimiz</h1>
      <div className="container">
        <div class="row justify-content-md-center">
          <div class="col-md-5 b">
            <img src="background.jpg" class="hizmet-img" alt="..."/>
            <p><strong>Mobilya</strong></p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>            
          </div>
          <div class="col-md-5 b">
            <img src="background.jpg" class="hizmet-img" alt="..."/>
            <p><strong>Mimari Tasarım ve Uygulama</strong></p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-md-5 b">
            <img src="background.jpg" class="hizmet-img" alt="..."/>
            <p><strong>Aydınlatma</strong></p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>            
          </div>
          <div class="col-md-5 b">
            <img src="background.jpg" class="hizmet-img" alt="..."/>
            <p><strong>Hediyelik Eşya ve Aksesuar</strong></p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </div>
        </div>    
      </div>
      <h1>Hizmetlerimiz 2</h1>
      <div className="container">
        <div class="row justify-content-md-center hizmet">
          <div class="col-md-4 b">
            <img src="background.jpg" class="hizmet-img" alt="..."/>
          </div>
          <div class="col-md-6 b">
            <p><strong>Mimari Tasarım ve Uygulama</strong></p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </div>
        </div>  
        <div class="row justify-content-md-center hizmet">
          <div class="col-md-6 b">
            <p><strong>Mimari Tasarım ve Uygulama</strong></p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </div>
          <div class="col-md-4 b">
            <img src="background.jpg" class="hizmet-img" alt="..."/>
          </div>
        </div>
        <div class="row justify-content-md-center hizmet">
          <div class="col-md-4 b">
            <img src="background.jpg" class="hizmet-img" alt="..."/>
          </div>
          <div class="col-md-6 b">
            <p><strong>Mimari Tasarım ve Uygulama</strong></p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </div>
        </div>  
        <div class="row justify-content-md-center hizmet">
          <div class="col-md-6 b">
            <p><strong>Mimari Tasarım ve Uygulama</strong></p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </div>
          <div class="col-md-4 b">
            <img src="background.jpg" class="hizmet-img" alt="..."/>
          </div>
        </div>
      </div>
    </div>
  )
}
