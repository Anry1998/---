import React, { useMemo, useCallback, useState } from 'react';

import MyHeavyComponent from './components/MyHeavyComponent';

/**
 * 1. useMemo from heavy computation
 * 2. Separate components
 * 3. useMemo for reducing number of times component re-render
 * 4. React.memo -> pure component 
 * 5. Preserved references
 * 6. useCallback for MemoizedSubComponent
 * 7. When to use these hooks
 */

export default function Home() {
	const [myState, setMyState] = useState('')

	// console.log('render home')

	// const myCalc = useMemo(() => {
	// 	return myState + 'test'
	// }, [myState])

	// const myCalc = useCallback(() => {
	// 	return myState + 'test'
	// }, [myState])

	// console.log(myState, myCalc)
	return (
		<div>
			<MyHeavyComponent />
		</div>
	);
}
