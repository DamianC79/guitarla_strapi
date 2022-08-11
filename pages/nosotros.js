import styles from '../styles/Nosotros.module.css'
import Image from 'next/image'
import Layout from '../components/Layout'

const Nosotros = () => {
  return (
    <Layout
    pagina='Nosotros'>
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros'/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit finibus tortor, sit amet malesuada dolor volutpat vel. Donec sollicitudin accumsan sodales. Phasellus lobortis, enim id finibus interdum, dolor mauris lobortis ipsum, eu lacinia mi urna vel lorem. Nulla blandit efficitur lectus eget dictum. Nullam id odio ullamcorper, pharetra lacus non, efficitur est. Mauris nec commodo enim. Sed risus diam, porta vel sem a, ornare venenatis risus. Praesent id pulvinar nunc. Curabitur molestie lacus ac elit tempus, vitae maximus ante aliquet. Phasellus felis justo, commodo at turpis bibendum, pulvinar gravida metus. Etiam ac ullamcorper ligula. Sed commodo turpis at felis blandit venenatis. Curabitur lacinia eros hendrerit blandit interdum. Nam dictum feugiat mi, eu venenatis elit suscipit quis.</p>
            <p>Fusce in urna a nisl consectetur mattis. Fusce tincidunt pulvinar lobortis. Phasellus bibendum erat sed scelerisque condimentum. Duis et tempor sem, a luctus mi. Cras a dui consectetur arcu dictum venenatis. Nam hendrerit volutpat odio, et sagittis ligula finibus vel. Praesent hendrerit turpis et mi fringilla, lacinia finibus neque porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ac nibh non mauris fermentum condimentum ac id neque. Duis suscipit rhoncus auctor. Mauris blandit dignissim nulla, sit amet ornare ex fermentum quis. Mauris vel ultricies justo.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros