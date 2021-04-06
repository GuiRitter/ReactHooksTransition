import React, { useEffect, useRef } from 'react';

function componentDidMount(props) {
	console.log('did mount', props);
}

function componentDidUpdate(props, prevProps) {
	console.log('did update', props, prevProps);
}

function componentWillUnmount(props) {
	console.log('will unmount', props);
}

function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

function Function(props) {
	const prevProps = usePrevious(props);

	const didMountRef = useRef(false);

	useEffect(() => {
		if (didMountRef.current) {
			componentDidUpdate(props, prevProps);
		} else {
			didMountRef.current = true;
			componentDidMount(props);
		}
	});

	useEffect(() => 
		() => componentWillUnmount(props)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	, []);

	return <>Now: {props.power}, before: {(prevProps || {}).power}</>;
}

export default Function;
