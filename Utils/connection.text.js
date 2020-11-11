const axios = require('axios')

test('Should get 10 users', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/users')
	const list = await response.data.slice(0,10)
	expect(list.length).toBe(10)
})