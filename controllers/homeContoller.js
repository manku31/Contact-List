var contectList = [
    {
        name : "Amit",
        phone : "1234567890"
    },

    {
        name : "Rishikesh",
        phone : "0987654321"
    },

    {
        name : "Manku",
        phone : "5432167890"
    }
]

module.exports.home = function (req, res) {
    return res.render("home", {
        title : "Contact List",
        contact_list : contectList
    });
}

module.exports.creatContact = function (req, res) {
    console.log(req.body);

    contectList.push(req.body);

    return res.redirect('back');
}
