import React from "react"
import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/Box"
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from "../src/lib/AlurakutComponents"
import { ProfileRelationsBoxWrapper } from "../src/components/PessoasFavoritas"

function FotoSidebar(params) {
  return (
  <Box>
    <img src={`https://github.com/${params.gitHubUser}.png`} />
    <hr />

    <a className="boxLink" href={`https://github.com/${params.gitHubUser}`}>
      @{ params.gitHubUser }
    </a>

    <hr />
    <AlurakutProfileSidebarMenuDefault />
  </Box>
  )
}

export default function Home() {
  const gitHubUser = "tiagoalmeida48";
  const [comunidades, setComunidades] = React.useState([{
    id: '2',
    title: "Acordar cedo",
    image: "https://alurakut.vercel.app/capa-comunidade-01.jpg"
  }]);
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'tiagoalmeida48',
    'felipefialho'
  ]
  return (
    <>
      <AlurakutMenu githubUser={gitHubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <FotoSidebar gitHubUser={gitHubUser} />
        </div>
        <div className="profileBemVindo" style={{ gridArea: 'profileBemVindo' }}>
          <Box>
            <h1 className="title">Bem vindo</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={ function handleCriarComunidade(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              if (comunidades.length < 6){
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
              }
            } }>
              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?" name="title" aria-label="Qual vai ser o nome da sua comunidade?" type="text" />
              </div>

              <div>
                <input placeholder="Coloque uma URL para usarmos de capa" name="image" aria-label="Coloque uma URL para usarmos de capa" type="text" />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div className="profileComunidade" style={{ gridArea: 'profileComunidade' }}>
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Comunidade ({ comunidades.length })</h2>
            <ul>
              {comunidades.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={`https://github.com/${item.title}`}>
                      <img src={item.image} />
                      <span>{item.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da comunidade ({ pessoasFavoritas.length })</h2>

            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li key={item}>
                    <a href={`https://github.com/${item}`}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
