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
        <title>Sekoya Ahşap Tasarım Atölyesi</title>
        <link rel="icon" href="/favicon64.png"/>
      </Head>
      <main>
        <div className="col-md-12 col-sm-12 col-xs-12 mesaj">
          <img className="sidebar-logo-img" src="sekoya-logo.png" alt="sekoya-logo"/>
          <h1>Mesajınız İletilmiştir</h1>
          <a href="/">Buradan anasayfaya dönüş yapabilirsiniz.</a>
        </div>
      </main>
    </div>
  )  
}

