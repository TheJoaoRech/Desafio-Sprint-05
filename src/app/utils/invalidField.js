class InvalidField extends Error {
	constructor(field) {
		super();
		this.name = 'InvalidField';
		this.description = `This field: "${field}" it's wrong!`;
	}
}

module.exports = InvalidField;