import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'
import Lotes from './lotes/Lotes'
import Total from './Total'

export default class Totais extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <Box display="flex"  height="100%">
                <Grid container alignContent="center" justifyContent="center">
                    <Grid item sm={6}>
                        <Lotes quantidade={this.props.quantidade} />
                    </Grid>
                    <Grid item sm={6}>
                        <Total total={this.props.total} />
                    </Grid>
                </Grid>
            </Box>
        )
    }
}
