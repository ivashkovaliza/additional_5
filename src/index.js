const check = (str, rules) => {
const stack = new Stack();
rules = parseRules(rules);

str.split('').forEach(bracket => {
	if (isMatch(stack.last(), bracket, rules)) {
	stack.pop();
	} else {
	stack.push(bracket);
}
});

return stack.isEmpty();
};

class Stack {
	constructor() {
		this.stack = [];
	}

	push(item) {
		this.stack.push(item);
	}

	pop() {
		return this.stack.pop();
	}

	last() {
		const len = this.stack.length;
		return len && this.stack[len - 1];
	}

	isEmpty() {
		return this.stack.length === 0;
	}
}

const parseRules = rules => rules.map(([open, close]) => ({open, close}));
const isMatch = (open, close, rules) => {
const rule = rules.find(rule => rule.open === open);

return rule && rule.close === close;
};

module.exports = check;