'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const co =  db.collection('user')
	// let res =await co.add({
	// 	name:'张五',
	// 	age:'20'
	// })
	let res =await co.doc('3b020ca3601a82fb0257e767776b98ff').remove()
	console.log('db11',res)
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return {
		code:'200'
	}
};
