import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'
import { ReactComponent as ImagemDinheiro } from '../../../../assets/dinheiro.svg';
export default class Total extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <Box display="flex"  height="100%" sm={3}>
                <Grid direction="column" alignItems="center" justify="center" container>
                    <Grid item>
                        <ImagemDinheiro height="100%" width={50} />

                    </Grid>
                    <Grid item>

                        <Box justifyContent="center" alignContent="center" height="100%">
                            R${this.props.total},00

                </Box>
                    </Grid>

                </Grid>

            </Box>
        )
    }
}
