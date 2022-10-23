import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

import './gallery.css'

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }


  return (
    <>
    <Header title="A Nossa Galeria" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam sit numquam blanditiis nisi explicabo.
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery Img ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery