    function duckCount() {

      let args = Array.prototype.slice.call(arguments)
      console.log(args)


      for (argument in arguments) {
        console.log(Object.hasOwnProperty.call(argument,'quack'))

       // console.log(JSON.stringify(arguments))
        let test = argument.slice()
        console.log(test)
        //console.log(argument.hasOwnProperty("quack"))
    
      }

      
    }

    module.exports = duckCount