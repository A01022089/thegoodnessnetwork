module.exports = function(app){
    app.get('/',function(req,res){
        res.send('It is working');
    })
}
