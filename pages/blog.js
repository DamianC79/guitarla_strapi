import Layout from '../components/Layout'
import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'

const Blog = ({entradas}) => {

  const nuevasEntradas = entradas.data;

  return (
    <Layout
      pagina='Blog'
    >
      <main className='contenedor'>
        <h2 className='heading'>Blog</h2>
         <div className={styles.blog}>
            {nuevasEntradas.map( entrada => (
              <Entrada
                key={entrada.id}
                entradas={entrada}
              />
            ))}
         </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
    const url = 'http://localhost:1337/api/blogs?populate=*'
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
  return {
    props: {
      entradas
    }
  }
}

export default Blog