import { Highlight } from '@components/Highlight'
import * as S from './styles'
import { Header } from '@components/Header'
import { GroupCard } from '@components/GroupCard'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([
    'Galera do Ignite',
    'Galera do Trabalho',
    'Amigos da Faculdade',
    'Família',
    'Amigos do Futebol',
    'Amigos da Igreja',
    'Amigos da Escola',
    'Amigos da Infância',
    'Amigos da Vizinhança',
    'Amigos do Clube',
    'Amigos do Bairro',
    'Amigos do Condomínio',
  ])

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a sua primeira turma?" />
        }
      />
      <Button title="Cadastrar Turma" />
    </S.Container>
  )
}
