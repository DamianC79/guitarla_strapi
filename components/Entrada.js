import {formatearFecha} from '../helpers'
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Entrada.module.css'

const Entrada = ({entradas}) => {
  const {id} = entradas
  const {titulo, resumen, publishedAt, imagen} = entradas.attributes;
  const urlImagen = imagen.data.attributes.formats.medium.url

  return (
    <article>
      <Image priority layout='responsive' width={800} height={600} src={urlImagen} alt={`imagen blog ${titulo}`}/>
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/api/blogs/${id}`}>
          <a className={styles.enlace}>Leer</a>
        </Link>
      </div>
    </article>
  )
}

export default Entrada