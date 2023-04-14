var contectList = []

module.exports.home = function (req, res) {
    return res.render("home", {
        title : "Contact List",
        contact_list : contectList   // this use for FOR-LOOP in ejs to connect the ejs FOR-LOOP name and contactList are same
    });
}

module.exports.creatContact = function (req, res) {
    // console.log(req.body);

    contectList.push(req.body);

    return res.redirect('back');
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
