class InvalidField extends Error {
	constructor(field) {
		super();
		this.name = 'InvalidField';
		this.status = 400;
		this.message = [
			{
				message: this.name, 
				details: [{	message: `The field: ${field} it's wrong!`}]}];
	}
}

module.exports = InvalidField;