import Image from "next/image"
import Layout from "../../components/Layout"
import {formatearFecha} from '../../helpers'
import styles from '../../styles/Entradas.module.css'

const EntradaBlog = ({entrada}) => {
  const {contenido, imagen, publishedAt, titulo} = entrada.attributes
  const urlImagen = imagen.data.attributes.formats.medium.url

  return (

    <Layout>
      <main className="contenedor">
          <h1 className="heading">{titulo}</h1>
          <article className={styles.entrada}>
            <Image layout="responsive" width={800} height={600} src={urlImagen} alt={`Imagen entradas ${titulo}`}/>
            <div className={styles.contenido}>
              <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
              <p className={styles.texto}>{contenido}</p>
            </div>
          </article>
      </main>
    </Layout>
    
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/api/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  const paths = entradas.map(entrada => ({
    params : { id : entrada.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params : {id}}) {
  const url = `${process.env.API_URL}/api/blogs${id}`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
return {
  props: {
    entradas
  }
}
}

// export async function getServerSideProps({query : {id}}) {
//   const url = `${process.env.API_URL}/api/blogs${id}`
//   const respuesta = await fetch(url)
//   const entrada = await respuesta.json()

//   return{
//     props:{
//       entrada
//     }
//   }
// }

export default EntradaBlog