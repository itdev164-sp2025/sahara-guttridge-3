import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'styled-components'
import {IconButton} from './IconButton'
import { Search } from 'styled-icons/boxicons-regular'

export const SearchButtton = props =>(
    <ThemeConsumer>
        {theme => <IconButton icon ={theme.icons.Search}{...props}/>}
    </ThemeConsumer>
)

SearchButtton.propTypes ={
    variant: PropTypes.string
} 
