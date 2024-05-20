import * as S from './styles'

type Props = S.FiltersStyleProps & {
  title: string
}

export const Filter = ({ isActive = false, title, ...rest }: Props) => {
  return (
    <S.Container isActive={isActive} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
