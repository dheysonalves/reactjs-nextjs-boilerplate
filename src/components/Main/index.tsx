import * as S from './styles'

const Main = ({
	title = 'react avancado',
	description = 'Typescript, NextJS and Styled Components'
}) => (
	<S.Wrapper>
		<S.Logotype
			src="/img/logo.svg"
			alt="Imagem de um átomo e React Avançado escrito ao lado"
		/>
		<S.Title>{title}</S.Title>
		<S.Description>{description}</S.Description>
		<S.Illustration
			src="/img/hero-illustration.svg"
			alt="Um desenvolvedor de frente para uma tela com código"
		/>
	</S.Wrapper>
)

export default Main
