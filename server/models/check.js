// validate input value including '$'
module.exports = {
    checkInject : function(obj){

        var reg = /^\$/i;
        var str = null;
        for(var key in obj){
            str = obj[key];
            if (reg.test(str)){
                return false;
            };
        }

        console.log('validate successfull');
        return true;
    }
}