'use strict'

const Database = use('Database')
const Product = use('App/Models/Product')

class ProductController {

    async index ({ request, response }) {
        const queryParams = request.get()
        const perPage = 4
        const page = queryParams.page || 1
        const query = Database.table('products')

        if (queryParams.search) {
            query
                .where('name', 'like', `%${queryParams.search}%`)
                .orWhere('description', 'like', `%${queryParams.search}%`)
        }

        const data = await query.paginate(page, perPage)
        response.send(data)
    }

    async category ({ params, response }) {
        const data = await Product.query().where('category', params.name).fetch()
        response.send(data)
    }

    async show ({ params, response }) {
        const p = await Product.find(params.id)
        response.send(p)
    }

    async store ({ request, response }) {
        const data = request.post()
        const p = await Product.create(data)
        response.send({ message: 'Created', data: p })
    }

    async update({ params, request, response }) {
        const data = request.post()
        const p = await Product.find(params.id)
        p.merge(data)
        await p.save()
        response.send({ message: 'Updated', data: data })
    }

    async destroy ({ params, response }) {
        const p = await Product.find(params.id)
        await p.delete()
        response.send({ message: `${p.uuid} was deleted` })
    }
}

module.exports = ProductController
