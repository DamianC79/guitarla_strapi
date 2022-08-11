
const EntradaBlog = () => {
  return (
    <div>
        <h1>
        EntradaBlog
        </h1>
    </div>
  )
}

export async function getServerSideProps({query : {id}}) {
  const url = `http://localhost:1337/api/blogs/${id}`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

  return{
    props:{

    }
  }
}

export default EntradaBlog