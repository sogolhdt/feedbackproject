const fs = require('fs');

var MongoClient = require('mongodb').MongoClient;

class feedbackAPI {
   constructor(query, queryString) {
      this.query = query;
      this.queryString = queryString;
   }


   getFullList() {
      this.query = this.query.find({}, 'title context rate name');

      return this;
   }

   addNewFeedback() {
      const title = this.queryString.title;
      const context = this.queryString.context;
      const rate = this.queryString.rate;
      const name = this.queryString.name;
      const timestamp = new Date().getTime();
      this.query = this.query.create({ title, context, rate, name, timestamp });
      return this;
   }

   deleteOneFeedback() {
      this.query = this.query.deleteOne({ _id: this.queryString });
      return this;
   }
}
module.exports = feedbackAPI;