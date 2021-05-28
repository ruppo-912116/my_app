const models = require("../models");

exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}

exports.submit_lead = function(req, res, next) {
    return models.Lead.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/leads');
    })
}

exports.show_leads = function(req,res,next){
    models.Lead.findAll().then(leads => {
        res.render('leadList', {leads: leads});
    })
}

exports.show_lead = function(req,res,next){
    const query = req.params.lead_id;
   return models.Lead.findOne({
       where: {
           id: query
       }
   }).then(lead => {
       res.render('leadDetails', {lead: lead})
   })
}
