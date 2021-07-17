import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/box"
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutComponents"
import { ProfileRelationsBoxWrapper } from "../src/components/PessoasFavoritas"

function FotoSidebar(params) {
  return (
  <Box>
    <img src={`https://github.com/${params.gitHubUser}.png`} />
  </Box>
  )
}

export default function Home() {
  const gitHubUser = "tiagoalmeida48";
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
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <FotoSidebar gitHubUser={gitHubUser} />
        </div>
        <div className="profileBemVindo" style={{ gridArea: 'profileBemVindo' }}>
          <Box>
            <h1 className="title">Bem vindo</h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileComunidade" style={{ gridArea: 'profileComunidade' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas da comunidade ({ pessoasFavoritas.length })</h2>

            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li>
                    <a href={`/users/${item}`} key={item}>
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
