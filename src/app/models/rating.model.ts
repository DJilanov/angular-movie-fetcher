export class RatingModel {
	Source: string;
	Value: string;

	constructor(
		Source?: string,
		Value?: string
	) {
		this.Source = Source;
		this.Value = Value;
	}
}
