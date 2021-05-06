const { response } = require('express');
const e = require('express');
const jsontoxml = require('jsontoxml');
const blingService = require('../services/BlingService');

module.exports = {
    saveData(parsedDriveData) {
        const xmlDeals = convertJsonXml(parsedDriveData);
        return saveToBling(xmlDeals);
    },
    parseBlingData(pipeDriveArray) {
        return pipeDriveArray.map(deal => (
            {
                pedido: {
                    numero: deal.id,
                    cliente: {
                        nome: deal.org_name,
                        cpf_cnpj: '00.000.000/0000-1',
                        endereco: deal.org_id.address,
                        numero: '000',
                        bairro: 'Cidade Alta',
                        cep: '95.700-000',
                        cidade: 'Bento Gonçalves',
                        uf: 'RS',
                    },
                    volume: {
                        servico: deal.title,
                    },
                    item: {
                        codigo: 185,
                        descricao: deal.title,
                        un: 'Pç',
                        qtde: deal.products_count,
                        vlr_unit: 100,
                    },
                    parcela: {
                        vlr: deal.value,
                    },
                },
            }));
    }
}

const convertJsonXml = (jsonDeals) => jsonDeals.map(deal => { return jsontoxml(deal) })

const saveToBling = async (xmlDeals) => {
    let sucess = [];
    const response = await Promise.all(xmlDeals.map(async (xml) => {
        const savedBlingData = await blingService.saveBlingOffer(xml);
        sucess.push(savedBlingData);
    }))
    return response;
}

