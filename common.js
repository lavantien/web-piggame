function addElement(type, id, content, events = {}) {
	const element = document.createElement(type);
	element.id = id;
	element.innerHTML = content;
	for (const event in events) {
		element.addEventListener(event, events[event]);
	}
	console.log('aaa');
	return element;
}
