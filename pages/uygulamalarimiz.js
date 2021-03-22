import Head from 'next/head'
import Link from 'next/link'

export default function Uygulamalarımız() {
  return (
    <div>
      <Head>
        <title>Sekoya | Uygulamalarımız</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
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
      <h1>Uygulamalarımız</h1>
      <div className="side-pages">
        <div className="portfolio">
          <div className="portfolio-item col-md-3" data-bs-toggle="modal" data-bs-target="#proje1">
            <img className="portfolio-item-img" src="background.jpg" alt=""/>
            <div className="portfolio-item-text portfolio-item-slideup" data-bs-toggle="modal" data-bs-target="#proje1">
              <div className="portfolio-item-text-text">
                <p><strong>#Proje 1</strong></p>
              </div>
            </div>
          </div>
          <div className="portfolio-item col-md-3" data-bs-toggle="modal" data-bs-target="#proje2">
            <img className="portfolio-item-img" src="background.jpg" alt=""/>
            <div className="portfolio-item-text portfolio-item-slideup" data-bs-toggle="modal" data-bs-target="#proje2">
              <div className="portfolio-item-text-text">
                <p><strong>#Proje 2</strong></p>
              </div>
            </div>
          </div>
          <div className="portfolio-item col-md-3" data-bs-toggle="modal" data-bs-target="#proje3">
            <img className="portfolio-item-img" src="background.jpg" alt=""/>
            <div className="portfolio-item-text portfolio-item-slideup" data-bs-toggle="modal" data-bs-target="#proje3">
              <div className="portfolio-item-text-text">
                <p><strong>#Proje 3</strong></p>
              </div>
            </div>
          </div>
          <div className="portfolio-item col-md-3" data-bs-toggle="modal" data-bs-target="#proje4">
            <img className="portfolio-item-img" src="background.jpg" alt=""/>
            <div className="portfolio-item-text portfolio-item-slideup" data-bs-toggle="modal" data-bs-target="#proje4">
              <div className="portfolio-item-text-text">
                <p><strong>#Proje 4</strong></p>
              </div>
            </div>
          </div>
          <div className="portfolio-item col-md-3" data-bs-toggle="modal" data-bs-target="#proje5">
            <img className="portfolio-item-img" src="background.jpg" alt="" />
            <div className="portfolio-item-text portfolio-item-slideup" data-bs-toggle="modal" data-bs-target="#proje5">
              <div className="portfolio-item-text-text">
                <p><strong>#Proje 5</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/*Modal*/}
    {/*#Proje 1*/}
      <div class="modal fade" id="proje1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">#Proje2</h3>
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

    {/*#Proje 2*/}
      <div class="modal fade" id="proje2" tabindex="-1" aria-labelledby="exampleModalLabelTwo" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabelTwo">#Proje2</h3>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-8">
                    <div id="carouselExampleIndicatorsTwo" class="carousel .carousel-dark slide" data-bs-ride="carousel">
                      <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicatorsTwo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="background.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                          <img src="background.jpg" class="d-block w-100" alt="..."/>
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsTwo"  data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden"></span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsTwo"  data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden"></span>
                      </button>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <p><strong>Proje Adı:</strong> Ahşap Tasarım 2</p>
                    <p><strong>Yıl:</strong> 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>









    </div>
  )
}
