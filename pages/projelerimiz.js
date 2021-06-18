import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div>
      <Head>
        <html lang="tr"/>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Projelerimiz</title>
        <link rel="icon" href="/favicon64.png"/>
      </Head>
      <main>
        <div className="col-md-sidebar col-sm-12 col-xs-12 sidebar">
          <div className="sidebar-logo">
            <Link href="/"><a><img className="sidebar-logo-img sidebar-logo-1" src="sekoya-logo.png" alt="sekoya-logo"/></a></Link>
          </div>
          <div className="sidebar-mobil">
            <div className="mobil-logo">
              <Link href="/"><a><img className="mobil-logo-img" src="sekoya-logo-2.png" alt="sekoya-logo"/></a></Link>
            </div>
            <div className="mobil-nav">
              <button><FontAwesomeIcon className="dropdown-item" icon={faBars}/></button>
              <nav>
                <ul>
                  <li className="sidebar-item">
                    <Link href="/hakkimizda">Hakkımızda</Link>
                  </li>
                  <li className="sidebar-item">
                    <Link href="/ekip">Ekibimiz</Link>
                  </li>
                  <li className="sidebar-item">
                    <Link href="/nasil-calisiyoruz">Nasıl Çalışıyoruz</Link>
                  </li>
                  <li className="sidebar-item">
                    <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
                  </li>
                  <li className="sidebar-item active">
                    <Link href="/projelerimiz">Projelerimiz</Link>
                  </li>
                  <li className="sidebar-item">
                    <Link href="/iletisim">İletişim</Link>
                  </li>
                </ul>
                <div className="sidebar-social-mobil">
                  <div className="sidebar-social-item"><a href="https://www.instagram.com/sekoyaahsap/" target="_blank"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
                  <div className="sidebar-social-item"><a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
                  <div className="sidebar-social-item"><a href="https://wa.me/905327076816" target="_blank"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
                </div> 
              </nav>
            </div>
          </div>
          <div className="sidebar-items">
            <ul>
              <li className="sidebar-item">
                <Link href="/hakkimizda">Hakkımızda</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/ekip">Ekibimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/nasil-calisiyoruz">Nasıl Çalışıyoruz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
              </li>
              <li className="sidebar-item active">
                <Link href="/projelerimiz">Projelerimiz</Link>
              </li>
              <li className="sidebar-item">
                <Link href="/iletisim">İletişim</Link>
              </li>
            </ul> 
          </div>
          <div className="sidebar-social">
            <div className="sidebar-social-item"><a href="https://www.instagram.com/sekoyaahsap/" target="_blank"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
            <div className="sidebar-social-item"><a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
            <div className="sidebar-social-item"><a href="https://wa.me/905327076816" target="_blank"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
          </div>
        </div>
        <div className="col-md-main col-sm-12 col-xs-12 uygulama">
      {/*
          <h1>Projelerimiz</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#proje1">
                <img className="uygulama-img" src="sekoya-home-1.jpg" alt=""/>
                <div className="" data-bs-toggle="modal" data-bs-target="#proje1">
                  <div className="">
                    <h5>#Proje 1</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#proje1">
                <img className="uygulama-img" src="sekoya-bg-2.jpg" alt=""/>
                <div className="" data-bs-toggle="modal" data-bs-target="#proje1">
                  <div className="">
                    <h5>#Proje 2</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#proje1">
                <img className="uygulama-img" src="sekoya-bg-3.jpg" alt=""/>
                <div className="" data-bs-toggle="modal" data-bs-target="#proje1">
                  <div className="">
                    <h5>#Proje 3</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#proje1">
                <img className="uygulama-img" src="sekoya-bg-4.jpg" alt=""/>
                <div className="" data-bs-toggle="modal" data-bs-target="#proje1">
                  <div className="">
                    <h5>#Proje 4</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#proje1">
                <img className="uygulama-img" src="sekoya-bg-5.jpg" alt=""/>
                <div className="" data-bs-toggle="modal" data-bs-target="#proje1">
                  <div className="">
                    <h5>#Proje 5</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
          <h1>Projelerimiz</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-4 uygulama-item">
                <Link href="/projeler/beyaz-isik-dis-poliklinigi"><a href="">
                  <img className="uygulama-img" src="proje1_BeyazIsikDisKlinigi/BYZ_01_web.jpg" alt="Beyaz Işık Diş Polikliniği"/>
                  <div className="">
                    <h3>Beyaz Işık Diş Polikliniği</h3>
                  </div>
                </a></Link>
              </div>
              <div className="col-md-4 uygulama-item">
                <Link href="/projeler/proje1"><a href="">
                  <img className="uygulama-img" src="proje1_BeyazIsikDisKlinigi/BYZ_01_web.jpg" alt=""/>
                  <div className="">
                    <h5>Beyaz Işık Diş Polikliniği</h5>
                  </div>
                </a></Link>
              </div>
              <div className="col-md-4 uygulama-item">
                <Link href="/projeler/proje1"><a href="">
                  <img className="uygulama-img" src="proje1_BeyazIsikDisKlinigi/BYZ_03_web.jpg" alt=""/>
                  <div className="">
                    <h5>#Proje 3</h5>
                  </div>
                </a></Link>
              </div>
              <div className="col-md-4 uygulama-item">
                <Link href="/projeler/proje1"><a href="">
                  <img className="uygulama-img" src="proje1_BeyazIsikDisKlinigi/BYZ_04_web.jpg" alt=""/>
                  <div className="">
                    <h5>#Proje 4</h5>
                  </div>
                </a></Link>
              </div>
              <div className="col-md-4 uygulama-item">
                <Link href="/projeler/proje1"><a href="">
                  <img className="uygulama-img" src="proje1_BeyazIsikDisKlinigi/BYZ_05_web.jpg" alt=""/>
                  <div className="">
                    <h5>#Proje 5</h5>
                  </div>
                </a></Link>
              </div>
            </div>
          </div>
        </div>
        {/* #Projeler  */}
        {/* #Proje 1  */}
        <div class="modal fade" id="proje1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">#Proje1</h3>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-8">
                      <div id="carouselExampleIndicators" class="carousel .carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="sekoya-bg-2.jpg" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="sekoya-bg-3.jpg" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="sekoya-logo.png" class="d-block w-100" alt="..."/>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden"></span>
                        </button>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <p><strong>Proje Adı:</strong> Ahşap Tasarım</p>
                      <p><strong>Yıl:</strong> 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Proje 1 Sonu  */}
      </main>
    </div>
  )  
}
