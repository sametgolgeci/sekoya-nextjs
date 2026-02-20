import Head from 'next/head'
import Link from 'next/link'
import Sidebar from "../components/sidebar"

export default function Home() {
  return (
    <div>
      <Head>
        <html lang="tr"/>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya Ahşap Tasarım Atölyesi</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/sekoya-logo-favicon-16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/sekoya-logo-favicon-32.png"/>
        <link rel="icon" type="image/png" sizes="64x64" href="/sekoya-logo-favicon-64.png"/>
      </Head>
      <main>
        <Sidebar/>
        <div className="col-md-main col-sm-12 col-xs-12 index overflow-page">
          <div className="col-md-6 col-sm-12 col-xs-12 index-img">
            <img src="sekoya-home-1.jpg" alt="sekoya-home"/>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 index-text">
            <div className="index-texts">
              <h6></h6>
              <h1>Özgün tasarımın ahşap hali<br/></h1>
              <h4>Sekoya Ahşap Tasarım Atölyesi</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  )  
}

