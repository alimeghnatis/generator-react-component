import React, { memo } from 'react'
import PropTypes from 'prop-types';

if(!process.env.BACKEND) import('./<%= scss %>')


const <%= name %> = (props) => 
	<h2>Welcome to the <%= name %> component</h2>

/*
<%= name %>.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
*/


export default memo(<%= name %>)

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

