import Header from '../../components/Header'
import HeaderImage from '../../images/termas_int.jpg'
import StoryImage from '../../images/about1.jpg'
import MissionImage from '../../images/about2.jpg'
import './about.css'

const About = () => {
  return (
   <>
   <Header title="Quem Somos" image={HeaderImage}>
    A GESTÃO DE EQUIPAMENTOS DO MUNICÍPIO DE CHAVES, E.M. S.A., é uma empresa local, com natureza municipal, de responsabilidade limitada, nos termos do artigo 19.º da Lei n.º 50/2012, de 31 de Agosto.
   </Header>

   <section className="about__story">
     <div className="container about__story-container">
       <div className="about__section-image">
        <img src={StoryImage} alt="Our Story Img" />
       </div>
       <div className="about__section-content">
        <h1>A Nossa História</h1>
        <p>
          A GEMC EM, foi constituída por escritura lavrada em 05 de Fevereiro de 2004, rege-se pelos seus estatutos, alterados por deliberação da Assembleia Geral em Março de 2014, pelo regime jurídico da atividade empresarial local, consagrado na Lei n.º 50/2012, de 31 de Agosto e, no que ali não for especialmente regulado, pela lei comercial e, subsidiariamente, pelo regime do setor empresarial, do Estado.
        </p>
       </div>
     </div>
   </section>

   <section className="about__mission">
     <div className="container about__mission-container">
       <div className="about__section-content">
        <h1>A Nossa Missão</h1>
        <p>
          A missão da GEMC EM, assenta na gestão de equipamentos e prestação de serviços de interesse geral, nos quais se incluem as Termas de Chaves, o Balneário Termal de Vidago, a Rede Geotérmica, a Gestão de Sistemas de Estacionamento Público pago, as Piscinas de Recreio e Lazer e o Parque de Campismo da Quinta do Rebentão.
        </p>
       </div>
       <div className="about__section-image">
        <img src={MissionImage} alt="Our Mission Img" />
       </div>
     </div>
   </section>
   </>
  )
}

export default About