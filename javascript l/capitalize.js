let your_string = prompt('Please input a sentence here')

function wordCapitalizer(your_string){
	let final_senetence = null

	final_senetence = your_string.trim().split(' ').toString().toUpperCase()
	return final_senetence
}

wordCapitalizer(your_string)