import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import Operacao from './operacao/Operacao';
import { Divider } from '@material-ui/core';
export default class Historico extends Component {

    listaDeACoes = [
        {
            empresa: "Gol Linhas Aereas ",
            indice: "GOLL4",
            quantidade: 100,
            precoUnitario: 11.5,
            total: 1150,
            tipoOperacao: "Compra"
        },
        {
            indice: "AZUL4",
            empresa: "Azul SA ",
            quantidade: 100,
            precoUnitario: 17.22,
            total: 1722,
            tipoOperacao: "Compra"

        },
        {
            indice: "ABEV3",
            empresa: "Ambev SA ",
            quantidade: 300,
            precoUnitario: 12.37,
            total: 3711,
            tipoOperacao: "Compra"
        },
        {
            indice: "ITUB4",
            empresa: "Itau Unibanco ",
            quantidade: 200,
            precoUnitario: 20.4,
            total: 4080,
            tipoOperacao: "Compra"
        },
        {
            indice: "PETR4",
            empresa: "PETROBRAS Petroleo Brasileiro ",
            quantidade: 100,
            precoUnitario: 13.84,
            total: 1384,
            tipoOperacao: "Compra"
        },
        {
            indice: "PETR4",
            empresa: "PETROBRAS Petroleo Brasileiro ",
            quantidade: 100,
            precoUnitario: 15,
            total: 1500,
            tipoOperacao: "Compra"
        },
        {
            indice: " VVAR3",
            empresa: "Via Varejo SA",
            quantidade: 100,
            precoUnitario: 7.6,
            total: 1520,
            tipoOperacao: "Compra"
        },
        {
            indice: "BBAS3",
            empresa: "Banco do Brasil SA",
            quantidade: 200,
            precoUnitario: 24.92,
            total: 4984,
            tipoOperacao: "Compra"
        },
        {
            indice: "OIBR",
            empresa: "Oi SA",
            quantidade: 1000,
            precoUnitario: 1.07,
            total: 1070,
            tipoOperacao: "Compra"
        },
        {
            indice: "OIBR",
            empresa: "Oi SA ",
            quantidade: 1500,
            precoUnitario: 0.55,
            total: 825,
            tipoOperacao: "Compra"

        },
        {
            indice: "AZUL4",
            empresa: "Azul SA ",
            quantidade: 100,
            precoUnitario: 14.85,
            total: 1485,
            tipoOperacao: "Compra"
        },
        {
            indice: "AZUL4",
            empresa: "Azul SA ",
            quantidade: 100,
            precoUnitario: 14.71,
            total: 1471,
            tipoOperacao: "Compra"

        },
        {
            indice: "EMBR3",
            empresa: "Embraer SA ",
            quantidade: 100,
            precoUnitario: 7.68,
            total: 768,
            tipoOperacao: "Compra"
        },
    ]

    lucro() {
        // trazer opções para que consiga-se comparar com preço medio ou com qual valor que ele tem
    }

    lote = () => {

        return this.listaDeACoes.map((acao, i) =>
            <Box>
                <Operacao acao={acao} />
                <Divider />
            </Box>)
    }
    render() {
        return (
            <Box>
                {this.lote()}
            </Box>
        )
    }
}
