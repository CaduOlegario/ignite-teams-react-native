import { TextInputProps } from 'react-native'
import * as S from './styles'
import theme from '@theme/index'

type Props = TextInputProps

export const Input = ({ ...rest }: Props) => {
  return <S.Container placeholderTextColor={theme.COLORS.GRAY_300} {...rest} />
}
