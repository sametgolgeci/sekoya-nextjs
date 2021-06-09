import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | İletişim</title>
        <link rel="icon" href="/favicon64.png"/>
      </Head>
      <main>
        <div className="col-md-sidebar col-sm-12 col-xs-12 sidebar">
          <div className="sidebar-logo">
            <Link href="/"><a>
              <img className="sidebar-logo-img" src="sekoya-logo.png" alt="sekoya-logo"/>
            </a></Link>
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
              <li className="sidebar-item">
                <Link href="/projelerimiz">Projelerimiz</Link>
              </li>
              <li className="sidebar-item active">
                <Link href="/iletisim">İletişim</Link>
              </li>
            </ul> 
          </div>
          <div className="sidebar-social">
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
            <div className="sidebar-social-item"><a href="#"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
          </div>
        </div>
        <div className="col-md-main col-sm-12 col-xs-12 iletisim">
          <div className="col-md-5 col-sm-12 col-xs-12 iletisim-right">
            <div className="iletisim-right-div">
              <iframe className="iletisim-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7671.258231642686!2d28.97465566913612!3d41.008138848321956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be92011c27%3A0x236e6f6f37444fae!2sAyasofya%20Camii!5e0!3m2!1str!2str!4v1618488107649!5m2!1str!2str" width="100%" height="100%"  allowfullscreen="" loading="lazy"/>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12 iletisim-left">
            <h1>İletişim</h1>
            <div className="iletisim-info">
              <h2>info@sekoyaahsaptasarım.com</h2>
              <h2>(5**) *** ** **</h2>
              <h2>Kağıthane, İstanbul</h2>
            </div>
            {/*
            <div className="iletisim-info">
              <p>info@sekoyaahsaptasarım.com</p>
              <p>(5**) *** ** **</p>
              <p>Kağıthane, İstanbul</p>
            </div>
            */}
            <div className="iletisim-mail">
              <div className="iletisim-form">
                <form class="row" action="/mesaj">
                  <div class="col-md-12 iletisim-form-label">
                    <label for="validationDefault01" class="form-label">Ad Soyad</label>
                    <input type="text" class="form-control" id="validationDefault01" required/>
                  </div>
                  <div class="col-md-12 iletisim-form-label">
                    <label type="email" for="validationDefault02" class="form-label">Mail</label>
                    <input type="text" class="form-control" id="validationDefault02" oninvalid="this.setCustomValidity('Please Enter valid email')" required/>
                  </div>
                  <div class="col-md-12 iletisim-form-label">
                    <label for="validationTextarea" class="form-label">Mesaj</label>
                    <textarea class="form-control" id="validationTextarea" rows="3" required></textarea>
                  </div>
                  <div class="col-md-12 iletisim-form-label">
                    <button class="iletisim-button" type="submit">Gönder</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )  
}

