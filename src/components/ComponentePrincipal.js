import Card from './Card'

const ComponentePrincipal = () => {
  return(
    <main>
      Conteúdo principal
      <div>
        <Card conteudo='Alguma coisa'/>
        <Card conteudo='Outra coisa'/>
      </div>
      <a href='#'>Link</a>
    </main>
  )
}

export default ComponentePrincipal
