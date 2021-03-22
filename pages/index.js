import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sekoya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="navigation">
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
      </main>
    </div>
  )
}
