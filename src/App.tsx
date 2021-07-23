type appProps = {
	testString: string,
}

const App = (props: appProps) => {
	const { testString } = props;
	return (
		<h3>Welcome to your snippet collection, test: { testString }</h3>
	)
}

export default App;
