
QUnit.test('Sum test 1',function(assert){
	let sum=getsum('2','1');
	assert.strictEqual(sum,3,'Sum is correct');
});

QUnit.test('Sum test 2',function(assert){
	let sum=getsum('11','9');
	assert.notStrictEqual(sum,4,'Sum is not correct');
});

QUnit.test('Sum test 3',function(assert){
	let sum=getsum('7','8');
	assert.strictEqual(sum,15,'Sum is correct');
});

QUnit.test('Sum test 4',function(assert){
	let sum=getsum('11','9');
	assert.strictEqual(sum,20,'Sum is correct');
});

QUnit.test('Sum test 5',function(assert){
	let sum=getsum('22','2');
	assert.strictEqual(sum,24,'Sum is correct');
});

QUnit.test('Diff test 1',function(assert){
	let sum=getdiff('2','1');
	assert.strictEqual(sum,1,'Diff is correct');
});

QUnit.test('Diff test 2',function(assert){
	let sum=getdiff('11','9');
	assert.notStrictEqual(sum,4,'Diff is not correct');
});

QUnit.test('Diff test 3',function(assert){
	let sum=getdiff('9','2');
	assert.strictEqual(sum,7,'Diff is correct');
});

QUnit.test('Diff test 4',function(assert){
	let sum=getdiff('11','9');
	assert.strictEqual(sum,2,'Diff is correct');
});



QUnit.test('Diff test 5',function(assert){
	let sum=getdiff('22','2');
	assert.strictEqual(sum,20,'Diff is correct');
});



QUnit.test('Mul test 1',function(assert){
	let sum=getmul('2','1');
	assert.strictEqual(sum,2,'Mul is correct');
});

QUnit.test('Mul test 2',function(assert){
	let sum=getmul('11','9');
	assert.notStrictEqual(sum,9,'Mul is not correct');
});

QUnit.test('Mul test 3',function(assert){
	let sum=getmul('8','8');
	assert.strictEqual(sum,64,'Mul is correct');
});

QUnit.test('Mul test 4',function(assert){
	let sum=getmul('11','9');
	assert.strictEqual(sum,99,'Mul is correct');
});

QUnit.test('Mul test 5',function(assert){
	let sum=getmul('22','2');
	assert.strictEqual(sum,44,'Mul is correct');
});

QUnit.test('Div test 1',function(assert){
	let sum=getdiv('1','1');
	assert.strictEqual(sum,1,'Div is correct');
});

QUnit.test('Div test 2',function(assert){
	let sum=getdiv('27','9');
	assert.notStrictEqual(sum,4,'Div is not correct');
});

QUnit.test('Div test 3',function(assert){
	let sum=getdiv('6','2');
	assert.strictEqual(sum,3,'Div is correct');
});

QUnit.test('Div test 4',function(assert){
	let sum=getdiv('18','9');
	assert.strictEqual(sum,2,'Div is correct');
});



QUnit.test('Div test 5',function(assert){
	let sum=getdiv('22','2');
	assert.strictEqual(sum,11,'Div is correct');
});


QUnit.test('Div test 6',function(assert){
	let sum=getdiv('a','2');
	assert.strictEqual(sum,11,'Div is correct');
});