import Product from '../../models/Product';
import { connect, disconnect } from '../../utils/db';
const ObjectId = require('mongodb').ObjectId;

// const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getProducts(req, res)
        }

        case 'POST': {
            if (req.body.editing) {
                return updateProduct(req, res)
            }
            return addProduct(req, res);
        }

        case 'PUT': {
            if (req.query.propty) {
                return updateProductpropty(req, res)
            }
            return updateProduct(req, res);
        }

        case 'DELETE': {
            return deleteProduct(req, res);
        }
    }
}

async function updateProductpropty(req, res) {
    try {
        const id = req.query.id
        const propty = req.query.propty
        const value = req.query.value
        // console.log(id, propty, value);

        const res = await connect()
        if (res.success) {
            if (propty == 'inStock') {
                let rq = await Product.updateOne({ _id: new ObjectId(id) }, { $set: { inStock: value } })
                // console.log(rq?.upsertedId)
            }
            if (propty == 'featured') {
                let rq = await Product.updateOne({ _id: new ObjectId(id) }, { $set: { featured: value } })
                // console.log(rq?.upsertedId)
            }
            if (propty == 'trending') {
                let rq = await Product.updateOne({ _id: new ObjectId(id) }, { $set: { trending: value } })
                // console.log(rq?.upsertedId)
            }
            await disconnect()
            return res.json({ success: true });
        }
    } catch (err) {
        // // console.log(err)
        return res.json({ message: new Error(err).message, success: false });
    }
}

async function deleteProduct(req, res) {
    try {
        const id = req.query.id
        await connect()
        await Product.deleteOne({ _id: new ObjectId(id) })
        await disconnect()
        return res.json({ success: true });
    } catch (err) {
        // // console.log(err)
        return res.json({ message: new Error(err).message, success: false });
    }

}

async function getProducts(req, res) {
    try {
    const connectionRes = await connect()
    if (connectionRes.success) {
        var products = null;
        const limit = req.query.limit
        const sumOfprevLimits = req.query.sumOfprevLimits

        if (req.query.featured) {
            products = await Product.find({ featured: true, inStock: true }).sort({"createdAt": -1}).limit(parseInt(limit)).skip(parseInt(sumOfprevLimits))
            await disconnect()

            return res.json({
                message: JSON.parse(JSON.stringify(products)),
                success: true,
            });
        }
        if (req.query.trending) {
            products = await Product.find({ trending: true, inStock: true }).sort({"createdAt": -1}).limit(parseInt(limit)).skip(parseInt(sumOfprevLimits))
            await disconnect()

            return res.json({
                message: JSON.parse(JSON.stringify(products)),
                success: true,
            });
        }
        if (req.query.category) {
            const category = req.query.category
            products = await Product.find({ category: { $in: [category] }, inStock: true }).sort({"createdAt": -1}).limit(parseInt(limit)).skip(parseInt(sumOfprevLimits))
            await disconnect()
            return res.json({
                message: JSON.parse(JSON.stringify(products)),
                success: true,
            });
        }
        if (req.query.slug) {
            const slug = req.query.slug
            products = await Product.findOne({ slug, inStock: true })
            await disconnect()
            return res.json({
                message: JSON.parse(JSON.stringify(products)),
                success: true,
            });
        }
        if (req.query.id) {
            const id = req.query.id
            // console.log(id)
            products = await Product.findOne({ _id: new ObjectId(id), inStock: true })
            await disconnect()
            // console.log(products)
            return res.json({
                message: JSON.parse(JSON.stringify(products)),
                success: true,
            });
        }

        products = await Product.find().sort({"createdAt": -1}).limit(parseInt(limit)).skip(parseInt(sumOfprevLimits))
        await disconnect()

        return res.json({
            message: JSON.parse(JSON.stringify(products)),
            success: true,
        });
    }
    } catch (err) {
        // // console.log('err', err)
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
//     // // console.log('here')
//     const category = req.params?.catg;
//     await connect()
//     const products = await Product.find({}, { projection: { category } }).toArray(function (err, result) {
//         if (err) throw err;
//         // console.log(result);
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
        //   // console.log('requestToAddProduct', requestToAddProduct)
        return res.json({
            message: JSON.parse(JSON.stringify(requestToAddProduct)),
            success: true,
        });
    } catch (err) {
        // // console.log('err', err)
        res.json({
            message: new Error(err).message,
            success: false,
        })
    }
}

async function updateProduct(req, res) {
    try {
        let data = req.body
        const id = req.body._id
        
        const slug = `${data?.name?.replaceAll(' ', '-')}-${data?.color}-${data?.size}`
        var product = { ...data, slug }
        // const todayDate = (new Date).setHours((new Date).setHours + 1)
        // product = { ...product, updatedAt: todayDate }
    
        await connect()
        let rq = await Product.updateOne({ _id: new ObjectId(id) }, { $set: { ...product } })
        // console.log(rq)
        await disconnect()

        return res.json({
            message: JSON.parse(JSON.stringify(product)),
            success: true,
        });
    } catch (err) {
        // console.log(err)
        return res.json({ message: new Error(err).message, success: false });
    }
}