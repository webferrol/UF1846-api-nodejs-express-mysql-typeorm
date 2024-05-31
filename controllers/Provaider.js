class Provaider {
    constructor () {

    }

    query (_, res) {
        res.json({
            msg: 'Query'
        })
    }

    detailQuery (req, res) {
        const { id } = req.params
        res.json({
            msg: 'Detail Query',
            id
        })
    }

    insert (_, res) {
        res.json({
            msg: 'insert'
        })
    }

    update (req, res) {
        const { id } = req.params
        res.json({
            msg: 'update',
            id
        })
    }

    delete (req, res) {
        const { id } = req.params
        res.json({
            msg: 'delete',
            id
        })
    }
}

export default new Provaider();