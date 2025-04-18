const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://gofoodmern:J._yn6aBWRrsnf8@gofood.ndf2bc9.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=GOFood';

// Optional: define schema and model if you plan to fetch right after connecting
const foodItemSchema = new mongoose.Schema({}, { collection: 'food_items', strict: false });
const FoodItem = mongoose.model('FoodItkkkkem', foodItemSchema);

const MongoDB = () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
      console.log('✅ Connected to MongoDB');

      try {
        const data = await FoodItem.find({});
        console.log('🍽️ Food Items:',data);
      } catch (queryErr) {
        console.error('❌ Error fetching food items:', queryErr);
      }
    })
    .catch((err) => console.error('❌ Error connecting to MongoDB:', err));
};

module.exports = MongoDB;
