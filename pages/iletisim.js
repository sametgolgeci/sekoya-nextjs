import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStream } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


export default function Home() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_u2sza0t', 'template_0h2gaba', e.target, 'user_ehvVXNhBAZi1VWbiIvJO6')
      .then((result) => {
          console.log(result.text);
          alert('Mesajınız gönderilmiştir!');
      }, (error) => {
          console.log(error.text);
          alert('Bir hata oluştu, lütfen bilgileriniz kontrol ediniz!');
      });
  }

  return (
    <div>
      <Head>
        <html lang="tr"/>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | İletişim</title>
        <link rel="icon" href="/favicon64.png"/>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"/>
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
                  <li className="sidebar-item">
                    <Link href="/projelerimiz">Projelerimiz</Link>
                  </li>
                  <li className="sidebar-item active">
                    <Link href="/iletisim">İletişim</Link>
                  </li>
                </ul>
                <div className="sidebar-social-mobil">
                  <div className="sidebar-social-item"><a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
                  <div className="sidebar-social-item"><a href="https://www.instagram.com/sekoyaahsap/" target="_blank"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
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
              <li className="sidebar-item">
                <Link href="/projelerimiz">Projelerimiz</Link>
              </li>
              <li className="sidebar-item active">
                <Link href="/iletisim">İletişim</Link>
              </li>
            </ul> 
          </div>
          <div className="sidebar-social">
            <div className="sidebar-social-item"><a href="https://www.linkedin.com/company/sekoyaahsap" target="_blank"><FontAwesomeIcon className="social-item" icon={faInstagram}/></a></div>
            <div className="sidebar-social-item"><a href="https://www.instagram.com/sekoyaahsap/" target="_blank"><FontAwesomeIcon className="social-item" icon={faLinkedinIn}/></a></div>
            <div className="sidebar-social-item"><a href="https://wa.me/905327076816" target="_blank"><FontAwesomeIcon className="social-item" icon={faWhatsapp}/></a></div>
          </div>
        </div>
        <div className="col-md-main col-sm-12 col-xs-12 iletisim">
          <div className="col-md-5 col-sm-12 col-xs-12 iletisim-right">
            <div className="iletisim-right-div iletisim-web">
              <iframe className="iletisim-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5225.783918571083!2d28.92894901049808!3d41.03816124278168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba0cc94ab6e7%3A0x31480b82223c5a08!2sFlatofis%20Hali%C3%A7!5e0!3m2!1str!2str!4v1623870015740!5m2!1str!2str" width="100%" height="100%" allowfullscreen="" loading="lazy"/>
            </div>
            <div className="iletisim-right-div iletisim-mobil">
              <iframe className="iletisim-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5225.783918571083!2d28.92894901049808!3d41.03816124278168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba0cc94ab6e7%3A0x31480b82223c5a08!2sFlatofis%20Hali%C3%A7!5e0!3m2!1str!2str!4v1623870015740!5m2!1str!2str" width="100%" height="360px" allowfullscreen="" loading="lazy"/>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12 iletisim-left">
            <h1>İletişim</h1>
            <div className="iletisim-info">
              <h2>+90 (532) 707 68 16</h2>
              <h2>info@sekoyaahsap.com</h2>
              <h2>Flatofis Haliç Defterdar Mh. Otlakçılar Cd. No:78 Kat:4 İç Kapı No:94 Eyüpsultan/İstanbul</h2>
            </div>
            <div className="iletisim-mail">
              <div className="iletisim-form">
                <form class="row" method="post" onSubmit={sendEmail} action="/mesaj">
                  <div class="col-md-12 iletisim-form-label">
                    <label for="validationDefault01" class="form-label">Ad Soyad</label>
                    <input type="text" class="form-control" id="validationDefault01" name="to_name" required/>
                  </div>
                  <div class="col-md-12 iletisim-form-label">
                    <label type="email" for="validationDefault02" class="form-label">Mail</label>
                    <input type="text" class="form-control" id="validationDefault02" oninvalid="this.setCustomValidity('Please Enter valid email')" name="to_mail" required/>
                  </div>
                  <div class="col-md-12 iletisim-form-label">
                    <label for="validationTextarea" class="form-label">Mesaj</label>
                    <textarea class="form-control" id="validationTextarea" rows="3" name="message" required></textarea>
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

