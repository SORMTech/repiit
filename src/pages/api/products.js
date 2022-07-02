import Product from '../../models/Product';
import { connect, convertDocToObj, disconnect } from '../../utils/db';
import { getFeaturedProducts } from '../../utils/getData';

// const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getProducts(req, res)
        }

        case 'POST': {
            return addProduct(req, res);
        }

        // case 'PUT': {
        //     return updateProduct(req, res);
        // }

        // case 'DELETE': {
        //     return deleteProduct(req, res);
        // }
    }
}

async function getProducts(req, res) {
    try {
        await connect()
        var products = null;
        if (req.query.featured) {
            products = await Product.find({ featured: true }).limit(4)
            await disconnect()

            return res.json({
                message: JSON.parse(JSON.stringify(products)),
                success: true,
            });
        }
        if (req.query.trending) {
            products = await Product.find({ trending: true }).limit(4)
            await disconnect()

            return res.json({
                message: JSON.parse(JSON.stringify(products)),
                success: true,
            });
        }
        if (req.query.category) {
            const category = req.query.category
            products = await Product.find({ category: { $in: [category] } })
            await disconnect()
            return res.json({
                message: JSON.parse(JSON.stringify(products)),
                success: true,
            });
        }
        if (req.query.slug) {
            const slug = req.query.slug
            products = await Product.findOne({ slug })
            await disconnect()
            return res.json({
                message: JSON.parse(JSON.stringify(products)),
                success: true,
            });
        }
        products = await Product.find().limit(50)
        await disconnect()

        return res.json({
            message: JSON.parse(JSON.stringify(products)),
            success: true,
        });
    } catch (err) {
        console.log('err', err)
        res.json({
            message: new Error(err).message,
            success: false,
        })
    }
}

// async function getProductBySlug(req, res) {
//     const slug = req.params?.slug;
//     await connect()
//     const product = await Product.findOne({ slug }).lean()
//     await disconnect()

//     res.json(product)
// }

// async function getProductsByCategory(req, res) {
//     // console.log('here')
//     const category = req.params?.catg;
//     await connect()
//     const products = await Product.find({}, { projection: { category } }).toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });
//     await disconnect()

//     const final = await getFilteredProducts(products);

//     res.json(final)
// }

async function addProduct(req, res) {
    let data = req.body
    const slug = `${data?.name?.replaceAll(' ', '-')}-${data?.color}-${data?.size}`

    data = { ...data, slug, _publishedAt: new Date() }

    try {
        await connect()
        const newProduct = new Product(data)
        const requestToAddProduct = await newProduct.save()
        await disconnect()
        //   console.log('requestToAddProduct', requestToAddProduct)
        return res.json({
            message: JSON.parse(JSON.stringify(requestToAddProduct)),
            success: true,
        });
    } catch (err) {
        console.log('err', err)
        res.json({
            message: new Error(err).message,
            success: false,
        })
    }
}