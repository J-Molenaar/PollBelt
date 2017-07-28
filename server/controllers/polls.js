var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Poll = mongoose.model("Poll");

module.exports = {

    logout: function(req, res)
    {
        req.session.destroy();
        res.redirect('/');
    },

    addPoll: function(req, res){
            var poll = new Poll({
                creator: req.session.userName,
                question: req.body.question,
                opt1: req.body.opt1,
                opt1Votes: 0,
                opt2: req.body.opt2,
                opt2Votes: 0,
                opt3: req.body.opt3,
                opt3Votes: 0,
                opt4: req.body.opt4,
                opt4Votes: 0,
            });
            poll.save().then((poll)=>{
                    console.log(`Successfully saved ${poll.question}...`);
                    res.json(poll);
                    console.log("After res.json, before redirect...");
                })
                .catch((err)=>{
                    res.status(500);
                    console.log("Inside the poll create .catch");
                    console.log(err);
                    res.json(err);
                })
    },

}



//     getAllItems: function(req, res){
//         Item.find()
//             .exec((err, allpolls)=>{
//                 if(err){
//                     console.log("No items found")
//                 }
//                 else
//                 {
//                 console.log("All Items: " + allitems)
//                 res.json(allitems)
//                 }})
//     },
//
//     getOneItem: function(req, res){
//         console.log("***********");
//     Item.findOne({_id: req.body.})
//         .exec((err, item)=>{
//             if(err)
//             {
//                 console.log("Error during Get One Item express controller" + err);
//             }
//             else
//             {
//                 console.log("Current Item: " + item);
//                 res.json(item)
//             }})
//     },
//
//     deleteItem: function(req, res){
//         console.log("Inside removeitem method in Express Controller", req.body.itemid);
//         Item.remove({_id: req.body.itemid})
//         .then(item => {res.json(true);})
//         .catch(err => console.log("We didnt remove the item" + err))
//
//     },
//
//     updateItem: function(req, res){
//     console.log("Inside Update Item method in Express Controller");
//     Item.findOne({_id: req.body.itemid})
//         .then((item)=> {
//             if(req.body.idx == 1)
//             {
//                 item.opt1Votes += 1;
//             }
//             else if(req.body.idx == 2)
//             {
//                 item.opt2Votes += 1;
//             }
//             else if(req.body.idx == 3)
//             {
//                 item.opt3Votes += 1;
//             }
//             else if(req.body.idx == 4)
//             {
//                 item.opt4Votes += 1;
//             }
//             item.save()
//         })
//         .then(() =>{res.json(true)})
//         .catch((err) => {"Errors during update current item: " + err})
// },
//
