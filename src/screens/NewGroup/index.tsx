import { Highlight } from '@components/Highlight'
import * as S from './styles'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export const NewGroup = () => {
  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie uma nova turma para jogar com seus amigos"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  )
}
