class Provaider {
    constructor () {

    }

    query (req, res) {
        res.json({
            msg: 'Query'
        })
    }

    detailQuery (req, res) {
        res.json({
            msg: 'Detail Query'
        })
    }

    insert (req, res) {
        res.json({
            msg: 'insert'
        })
    }

    update (req, res) {
        res.json({
            msg: 'update'
        })
    }

    delete (req, res) {
        res.json({
            msg: 'delete'
        })
    }
}

export default new Provaider();