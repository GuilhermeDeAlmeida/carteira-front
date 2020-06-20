import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'
import Acao from './acao/Acao'
import Totais from './totais/Totais'
import TipoOperacao from './totais/TipoOperacao'
export default class Operacao extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <Box border={2} borderRadius={20} bgcolor="secondary.main">
                <Grid container>
                    <Grid item sm={3}>
                        <Acao empresa={this.props.acao.empresa} indice={this.props.acao.indice} precoPorAcao={this.props.acao.precoUnitario} />
                    </Grid>
                    <Grid item sm={6}>
                        <Totais total={this.props.acao.total} quantidade={this.props.acao.quantidade} />
                    </Grid>
                    <Grid item sm={3}>
                        <TipoOperacao tipoOperacao={this.props.acao.tipoOperacao} />
                    </Grid>
                </Grid>
            </Box >
        )
    }
}
