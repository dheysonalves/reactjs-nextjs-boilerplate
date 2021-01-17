import * as S from './styles'

const Main = () => (
	<S.Wrapper>
		<S.Logotype
			src="/img/logo.svg"
			alt="Imagem de um átomo e React Avançado escrito ao lado"
		/>
		<S.Title>react avancado</S.Title>
		<S.Description>Typescript, NextJS and Styled Components</S.Description>
		<S.Illustration
			src="/img/hero-illustration.svg"
			alt="Um desenvolvedor de frente para uma tela com código"
		/>
	</S.Wrapper>
)

export default Main
