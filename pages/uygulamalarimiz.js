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
        <title>Sekoya | Uygulamalarımız</title>
        <link rel="icon" href="/favicon.ico"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
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
        <div className="col-md-9 col-sm-12 col-xs-12 uygulama">
          <h1>Uygulamalarımız</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#proje1">
                <img className="uygulama-img" src="background.jpg" alt=""/>
                <div className="" data-bs-toggle="modal" data-bs-target="#proje1">
                  <div className="">
                    <p><strong>#Proje 1</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#proje1">
                <img className="uygulama-img" src="background.jpg" alt=""/>
                <div className="" data-bs-toggle="modal" data-bs-target="#proje1">
                  <div className="">
                    <p><strong>#Proje 2</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#proje1">
                <img className="uygulama-img" src="background.jpg" alt=""/>
                <div className="" data-bs-toggle="modal" data-bs-target="#proje1">
                  <div className="">
                    <p><strong>#Proje 3</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#proje1">
                <img className="uygulama-img" src="background.jpg" alt=""/>
                <div className="" data-bs-toggle="modal" data-bs-target="#proje1">
                  <div className="">
                    <p><strong>#Proje 4</strong></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#proje1">
                <img className="uygulama-img" src="background.jpg" alt=""/>
                <div className="" data-bs-toggle="modal" data-bs-target="#proje1">
                  <div className="">
                    <p><strong>#Proje 5</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1>Uygulamalarımız 2</h1>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Link href="/projeler/proje1"><a href="">
                  <img className="uygulama-img" src="background.jpg" alt=""/>
                  <div className="">
                    <p><strong>#Proje 1</strong></p>
                  </div>
                </a></Link>
              </div>
              <div className="col-md-4">
                <Link href="/projeler/proje1"><a href="">
                  <img className="uygulama-img" src="background.jpg" alt=""/>
                  <div className="">
                    <p><strong>#Proje 2</strong></p>
                  </div>
                </a></Link>
              </div>
              <div className="col-md-4">
                <Link href="/projeler/proje1"><a href="">
                  <img className="uygulama-img" src="background.jpg" alt=""/>
                  <div className="">
                    <p><strong>#Proje 3</strong></p>
                  </div>
                </a></Link>
              </div>
              <div className="col-md-4">
                <Link href="/projeler/proje1"><a href="">
                  <img className="uygulama-img" src="background.jpg" alt=""/>
                  <div className="">
                    <p><strong>#Proje 4</strong></p>
                  </div>
                </a></Link>
              </div>
              <div className="col-md-4">
                <Link href="/projeler/proje1"><a href="">
                  <img className="uygulama-img" src="background.jpg" alt=""/>
                  <div className="">
                    <p><strong>#Proje 5</strong></p>
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
                            <img src="background.jpg" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="background.jpg" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="background.jpg" class="d-block w-100" alt="..."/>
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
