    function reduce(arr, fn, initial) {
      // SOLUTION GOES HERE

	    
			function fn (obj, curr, index, arr) {
			
				// obj.curr = 0
				// console.log(obj)	
				// console.log(obj.hasOwnProperty('curr'))

				if (!arr.length) return obj

		  	  	obj.hasOwnProperty(curr) ? obj[curr] += 1 : obj[curr] = 0
		  	  	//let rest = arr.slice(1)

		  	  	return fn (null, arr[0], null, arr.slice(1))


		    }

		fn(initial, arr[0], null, arr)

}

    module.exports = reduce