import Head from 'next/head'
import Link from "next/link"
import Sidebar from "../components/sidebar"
import { projects } from "../data/projects"

export default function Home() {
  return (
    <div>
      <Head>
        <html lang="tr"/>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Sekoya | Projelerimiz</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/sekoya-logo-favicon-16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/sekoya-logo-favicon-32.png"/>
        <link rel="icon" type="image/png" sizes="64x64" href="/sekoya-logo-favicon-64.png"/>
      </Head>
      <main>
        <Sidebar/>
        <div className="col-md-main col-sm-12 col-xs-12 uygulama">
     
          <h1>Projelerimiz</h1>

          <div className="container">
            <div className="row">
              {projects.map((project, index) => (
              <div key={index} className="col-md-4 col-sm-6 col-12 uygulama-item">
                <Link href={`/projeler/${project.slug}`}>
                  <a>
                    <img
                      className="uygulama-img"
                      src={project.images[0]}
                      alt={project.title}
                    />
                    <div>
                      <h5>{project.title}</h5>
                    </div>
                  </a>
                </Link>
              </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )  
}
