const mongoose = require('mongoose');
const Offer = mongoose.model('Offer');

module.exports = {
    async save(modelArray) {
        await modelArray.data.map(({ title, status, value, won_time }) => {
            Offer.create({
                title,
                status,
                value,
                won_time
            })
        })
    },
    async search() {
        return Offer.find();
    }
}