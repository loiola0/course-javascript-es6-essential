(()=>{
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name;

    function getName(){
        return this.name;
    }

    const user ={
        name:'Nome do objeto em construção',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());

})();