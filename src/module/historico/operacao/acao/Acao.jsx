import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'
import { ReactComponent as ImagemAcao } from '../../../../assets/acao.svg';

export default class Acao extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        // empresa={this.props.acao.empresa} indice={this.props.acao.empresa} precoPorAcao={this.props.acao.precoUnitario
        return (

            <Box height="100%" >
                <Grid container direction="column" alignContent="center" justifyContent="center"  >
                    <Grid item>
                        {this.props.empresa}
                    </Grid>
                    <Grid item>
                        <Box >
                            <Box sm={2}style={{ position: "relative", top: 35, left: 15 }} bgcolor="secondary.main">
                                {this.props.indice}
                            </Box>
                            <ImagemAcao height={75} width={75} />
                        </Box>
                    </Grid>
                    <Grid item>
                        R${this.props.precoPorAcao}
                    </Grid>
                </Grid>
            </Box>
        )
    }
}
