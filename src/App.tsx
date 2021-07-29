import Counter from "./Counter";

type appProps = {
	testString: string,
}

const App = (props: appProps) => {
	const { testString } = props;

	return (
		<>
			<h3>Welcome to your snippet collection, test: { testString }</h3>
			<p>Env: {process.env.NODE_ENV} {process.env.name}</p>
			<Counter />
		</>
	)
}

export default App;
