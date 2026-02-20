import { useState, useEffect } from "react"

export default function galleryLightbox({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(null)

  const close = () => setCurrentIndex(null)

  const prev = () =>
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    )

  const next = () =>
    setCurrentIndex(
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    )

  // ESC ve ok tuşları
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [currentIndex])

  return (
    <>
      <div className="proje-list">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="proje-img"
            onClick={() => setCurrentIndex(index)}
            style={{ cursor: "pointer" }}
            alt={`${title} - ${index + 1}`}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <div className="lightbox" onClick={close}>
          <button
            className="prev"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
          >
            ‹
          </button>

          <img
            src={images[currentIndex]}
            className="lightbox-img"
            alt={`${title} - ${currentIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="next"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}