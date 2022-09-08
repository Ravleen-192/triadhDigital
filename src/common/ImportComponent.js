const  ImportCompnent =(menuId)=>{
    switch(menuId){
        case 1:
            return require('../component/Company');
        case 2:
            return require('../component/Services');
        case 3:
            return require('../component/Products');
        case 4:
            return require('../component/contact');
        default:
            return require("../component/Home");
    }
}

export default ImportCompnent;