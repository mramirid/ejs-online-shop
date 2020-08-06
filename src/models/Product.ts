import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})

interface IProduct extends mongoose.Document {
  title: string
  price: number
  description: string
  imageUrl: string
}

export default mongoose.model<IProduct>('Product', productSchema)

// import { ObjectId } from 'mongodb'

// import { getDb } from '../utils/database'

// export default class Product {
//   constructor(
//     public title: string,
//     public price: number,
//     public imageUrl: string,
//     public description: string,
//     public _id?: ObjectId,
//     public userId?: ObjectId
//   ) { }

//   save() {
//     try {
//       if (this._id) {
//         return getDb().collection('products').updateOne({ _id: this._id }, { $set: this })
//       } else {
//         return getDb().collection('products').insertOne(this)
//       }
//     } catch (error) {
//       throw error
//     }
//   }

//   static fetchAll(): Promise<Product[]> {
//     try {
//       return getDb().colle ction('products').find().toArray()
//     } catch (error) {
//       throw error
//     }
//   }

//   static findById(productId: string): Promise<Product | null> {
//     try {
//       return getDb().collection('products').findOne({ _id: new ObjectId(productId) })
//     } catch (error) {
//       throw error
//     }
//   }

//   static deleteById(productId: string) {
//     try {
//       return getDb().collection('products').deleteOne({ _id: new ObjectId(productId) })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }