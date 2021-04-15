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
        <title>Sekoya | İletişim</title>
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
              <li className="sidebar-item">
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
        <div className="col-md-9 col-sm-12 col-xs-12 iletisim">
          <div className="col-md-6 col-sm-12 col-xs-12 iletisim-right">
            <div className="iletisim-right-div">
              <iframe className="iletisim-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7671.258231642686!2d28.97465566913612!3d41.008138848321956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be92011c27%3A0x236e6f6f37444fae!2sAyasofya%20Camii!5e0!3m2!1str!2str!4v1618488107649!5m2!1str!2str" width="100%" height="100%"  allowfullscreen="" loading="lazy"/>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 iletisim-left">
            <h1>İletişim</h1>
            <div>
              <p>Simge, Adres</p>
              <p>Simge, Telefon</p>
              <p>Simge, Mail</p>
            </div>
            
            <div className="iletisim-mail">
              <form class="row">
                <div class="col-md-8">
                  <label for="validationDefault01" class="form-label">Ad Soyad</label>
                  <input type="text" class="form-control" id="validationDefault01" required/>
                </div>
                <div class="col-md-4">
                  <label for="validationDefault04" class="form-label">Konu Başlığa</label>
                  <select class="form-select" id="validationDefault04" required>
                    <option selected disabled value=""></option>
                    <option>Çizim</option>
                    <option>Fiyat</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <label type="email" for="validationDefault02" class="form-label">Mail</label>
                  <input type="text" class="form-control" id="validationDefault02" oninvalid="this.setCustomValidity('Please Enter valid email')" required/>
                </div>
                <div class="col-12">
                  <label for="validationTextarea" class="form-label">Mesaj</label>
                  <textarea class="form-control" id="validationTextarea" rows="5" required></textarea>
                </div>
                <div class="col-12">
                  <button class="iletisim-button" type="submit">Gönder</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )  
}

