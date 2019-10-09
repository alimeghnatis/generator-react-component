import React, { memo } from 'react'

import('./<%= scss %>')

export default memo((
	props
) => 
	<h2>Welcome to your <%= name %> component</h2>
)

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

