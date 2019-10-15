import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.<%= chunk_name %>" */ './<%= scss %>')

const main_class = '<%= lower %>'

const <%= name %> = ({
	className
}) => 
	<div className={
		main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
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
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
*/


export default memo(<%= name %>)

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

