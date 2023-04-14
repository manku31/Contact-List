const Contact = require('../models/Contact');        // ==> path of Schema

var contactList = []

module.exports.home = function (req, res) {
    return res.render("home", {
        title : "Contact List",
        contact_list : contactList   // this use for FOR-LOOP in ejs to connect the ejs FOR-LOOP name and contactList are same
    });
}

module.exports.creatContact = async function (req, res) {
    // console.log(req.body);

    // contactList.push(req.body);  // ==> this add the deta in constectList 

    try {
        
        await Contact.create({
            name : req.body.name,
            phone : req.body.phone
        });

        return res.redirect('back');

    } catch (err) {
        console.log("Error in Creating, Error is ", err);
    }
}

module.exports.deleteContact = function (req, res) {
    // console.log(req.query);

    let phoneNumber = req.query.phone;
    // console.log(phoneNumber);

    let contactIndex = contectList.findIndex(contact => contact.phone == phoneNumber);
    // console.log(contactIndex);

    if( contactIndex != 1) {
        contectList.splice(contactIndex, 1);
    }

    return res.redirect('back');
}
