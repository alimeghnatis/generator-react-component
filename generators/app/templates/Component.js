import React, { memo } from 'react'
import PropTypes from 'prop-types'
import getClassName from 'utils'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.<%= chunk_name %>" */ './<%= scss %>')

const main_class = '<%= lower %>'

const <%= name %> = (props) => 
	<div className={
		main_class
		+ ' '
	}>
		<h2>Welcome to the <%= name %> component</h2>
	</div>

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

