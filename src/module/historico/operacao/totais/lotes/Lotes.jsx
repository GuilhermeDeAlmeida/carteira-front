import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'
import { ReactComponent as ImagemLote } from '../../../../../assets/lote.svg';

export default class Grupos extends Component {
    static propTypes = {
        prop: PropTypes
    }

    lote = () => {
        return (
            <Box alignContent="center" justifyContent="center" height="100%" >
                <Grid container direction="column" alignContent="center" justifyContent="center"  >
                    <Grid item>
                        <ImagemLote height={50} width={50} />
                    </Grid>
                    <Grid item>
                        {this.props.quantidade}
                    </Grid>
                </Grid>
            </Box>);
    }
    render() {
        return (
            this.lote()
        )
    }
}
