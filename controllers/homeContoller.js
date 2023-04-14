const Contact = require('../models/Contact');

var contactList = []

module.exports.home = async function (req, res) {

    try {

        let contact = await Contact.find({});
        
        return res.render("home", {
            title : "Contact List",
            contact_list : contact
        });

    } catch (err) {
        console.log("Error in Showing, Error is ", err);
    }
}

module.exports.creatContact = async function (req, res) {
    
    try {
        
        let contact = await Contact.create({
            name : req.body.name,
            phone : req.body.phone
        });

        return res.redirect('back');

    } catch (err) {
        console.log("Error in Creating, Error is ", err);
    }
}

module.exports.deleteContact = async function (req, res) {

    try {

        let id = req.query.id;
    
        let deleteContact = await Contact.findByIdAndDelete(id);
        
        return res.redirect('back');
        
    } catch (err) {
        console.log("Error in Deleteing, Error is ", err);
    }


}
