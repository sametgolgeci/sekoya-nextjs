import { useRouter } from "next/router"
import Head from "next/head"
import Sidebar from "../../components/sidebar"
import GalleryLightbox from "../../components/galleryLightbox"
import { projects } from "../../data/projects"

export default function ProjectPage() {
  const router = useRouter()
  const { slug } = router.query

  const project = projects.find((p) => p.slug === slug)

  if (!project) return null

  return (
    <div>
      <Head>
        <title>Sekoya | {project.title}</title>
      </Head>

      <main>
        <Sidebar />

        <div className="col-md-main col-sm-12 col-xs-12 proje">
          <h1>{project.title}</h1>

          <div className="container">
            <div className="row proje-inline">
              <div className="col-md-12 col-sm-12 col-xs-12 proje-right">
                <div className="proje-text">
                  <p>{project.description}</p>
                </div>
              </div>

              <div className="col-md-12 col-sm-12 col-xs-12">
                <GalleryLightbox images={project.images} title={project.title}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}