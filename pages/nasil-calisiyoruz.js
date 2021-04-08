{/*import Head from 'next/head'
import Link from 'next/link'

export default function Nasıl() {
  return (
    <div>
      <Head>
        <title>Sekoya | Nasıl Çalışıyoruz?</title>
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
      <h1>Nasıl Çalışıyoruz</h1>
      <div className="container">
        <div className="row deneme">
          <div className="col-md-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-md-4 flow">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle className="circle-bg" cx="50" cy="50" r="40" transform="rotate(-180 50 50)"/>
              <circle className="circle-color" cx="50" cy="50" r="40" transform="rotate(-180 50 50)"/>
              <text className="flow-text" x="30" y="53">Ön Görüşme</text>
            </svg>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-4 flow">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle className="circle-bg" cx="50" cy="50" r="40"/>
              <circle className="circle-color" cx="50" cy="50" r="40"/>
              <text className="flow-text" x="30" y="53">Fikir Aşaması</text>
            </svg>
          </div>
          <div className="col-md-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div> 

        <ul class="nav justify-content-center nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#how_one" type="button" role="tab" aria-controls="how_one" aria-selected="true">Ön Görüşme</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#how_two" type="button" role="tab" aria-controls="how_two" aria-selected="false">Fikir Aşaması</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#how_three" type="button" role="tab" aria-controls="how_three" aria-selected="false">Takdim</button>
          </li>
      
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#how_four" type="button" role="tab" aria-controls="how_four" aria-selected="false">El Sıkışma</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#how_five" type="button" role="tab" aria-controls="how_five" aria-selected="false">Üretim ve İşçilik</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#how_six" type="button" role="tab" aria-controls="how_six" aria-selected="false">Teslimat</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#how_seven" type="button" role="tab" aria-controls="how_seven" aria-selected="false">Memnuniyet</button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="how_one" role="tabpanel" aria-labelledby="pills-home-tab">a Öngörüşme</div>
          <div class="tab-pane fade" id="how_two" role="tabpanel" aria-labelledby="pills-profile-tab">b Fikir</div>
          <div class="tab-pane fade" id="how_three" role="tabpanel" aria-labelledby="pills-contact-tab">c Takdim</div>
          <div class="tab-pane fade" id="how_four" role="tabpanel" aria-labelledby="pills-contact-tab">d El</div> 
          <div class="tab-pane fade" id="how_five" role="tabpanel" aria-labelledby="pills-contact-tab">d Üretim</div>
          <div class="tab-pane fade" id="how_six" role="tabpanel" aria-labelledby="pills-contact-tab">e Teslimat</div>
          <div class="tab-pane fade" id="how_seven" role="tabpanel" aria-labelledby="pills-contact-tab">f Memnuniyet</div>
        </div>
    </div>
  )
}
*/}


import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare,faLinkedin,faBehanceSquare } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream } from '@fortawesome/free-solid-svg-icons'

export default function Nasil() {
  return (
    <div>
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Nasıl Çalışıyoruz</title>
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
              <li className="sidebar-item active">
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
        <div className="col-md-9 col-sm-12 col-xs-12 nasil">
          <h1>Nasıl Çalışıyoruz?</h1>
          <div className="nasil-container">
            <div className="container">
              <ul class="nav justify-content-center nav-pills mb-3 deneme" id="pills-tab" role="tablist">
                <li class="nav-item col-md-4 nasil-item" role="presentation">
                  <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#how_one" type="button" role="tab" aria-controls="how_one" aria-selected="true">Ön Görüşme</button>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                <li class="nav-item col-md-4 nasil-item" role="presentation">
                  <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#how_two" type="button" role="tab" aria-controls="how_two" aria-selected="false">Fikir Aşaması</button>
                </li>
                <li class="nav-item col-md-4 nasil-item" role="presentation">
                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#how_three" type="button" role="tab" aria-controls="how_three" aria-selected="false">Takdim</button>
                </li>
                <div class="tab-content col-md-12 nasil-text" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="how_one" role="tabpanel" aria-labelledby="pills-home-tab">a Öngörüşme</div>
                  <div class="tab-pane fade" id="how_two" role="tabpanel" aria-labelledby="pills-profile-tab">b Fikir</div>
                  <div class="tab-pane fade" id="how_three" role="tabpanel" aria-labelledby="pills-contact-tab">c Takdim</div>
                  <div class="tab-pane fade" id="how_five" role="tabpanel" aria-labelledby="pills-contact-tab">d Üretim</div>
                  <div class="tab-pane fade" id="how_six" role="tabpanel" aria-labelledby="pills-contact-tab">e Teslimat</div>
                  <div class="tab-pane fade" id="how_seven" role="tabpanel" aria-labelledby="pills-contact-tab">f Memnuniyet</div>
                </div>
                <li class="nav-item col-md-4 nasil-item" role="presentation">
                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#how_five" type="button" role="tab" aria-controls="how_five" aria-selected="false">Üretim ve İşçilik</button>
                </li>
                <li class="nav-item col-md-4 nasil-item" role="presentation">
                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#how_six" type="button" role="tab" aria-controls="how_six" aria-selected="false">Teslimat</button>
                </li>
                <li class="nav-item col-md-4 nasil-item" role="presentation">
                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#how_seven" type="button" role="tab" aria-controls="how_seven" aria-selected="false">Memnuniyet</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )  
}



