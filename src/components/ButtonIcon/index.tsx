import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as S from './styles'

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: S.ButtonIconTypeStyleProps
}

export const ButtonIcon = ({ icon, type = 'PRIMARY', ...rest }: Props) => {
  return (
    <S.Container type={type} {...rest}>
      <S.Icon name={icon} type={type} />
    </S.Container>
  )
}
