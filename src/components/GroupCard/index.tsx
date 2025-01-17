import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

export const GroupCard: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
