import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'
import { ReactComponent as ImagemBull } from '../../../../assets/touro.svg';
import { ReactComponent as ImagemBear } from '../../../../assets/urso.svg';
export default class TipoOperacao extends Component {
    static propTypes = {
        prop: PropTypes
    }

    bullish = () => {
        return <ImagemBull height="100%" width={80} />
    }

    bearish = () => {
        return <ImagemBear height="100%" width={80}/>
    }

    render() {
        return (
            <Box display="flex" border-left={1} sm={3} height="100%">
                <Grid container direction="column" justify="center" alignContent="center">
                    <Grid item>
                        {this.props.tipoOperacao === "Venda" ? this.bearish() : this.bullish()}
                    </Grid>
                </Grid>
            </Box>
        )
    }
}
