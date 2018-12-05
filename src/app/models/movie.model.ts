export class MovieModel {
	id: string;
	category: string;
	isShownMainPage: boolean;
	newPrice: number;
	oldPrice: number;
	isDailyOffer: boolean;
	zIndex: number;
	isShown: boolean;
	count: number;
	rating: number;
	isNew: boolean;
	isOnCarousel: boolean;
	link: string;
	make: string;
	mainImage: string;
	otherImages: Array<string>

	constructor(
		id?: string,
		category?: string,
		isShownMainPage?: boolean,
		newPrice?: number,
		oldPrice?: number,
		isDailyOffer?: boolean,
		zIndex?: number,
		isShown?: boolean,
		count?: number,
		rating?: number,
		isNew?: boolean,
		isOnCarousel?: boolean,
		link?: string,
		make?: string,
		mainImage?: string,
		otherImages?: Array<string>
	) {
		this.id = id;
		this.category = category;
		this.isShownMainPage = isShownMainPage;
		this.newPrice = newPrice;
		this.oldPrice = oldPrice;
		this.isDailyOffer = isDailyOffer;
		this.zIndex = zIndex;
		this.isShown = isShown;
		this.count = count;
		this.rating = rating;
		this.isNew = isNew;
		this.isOnCarousel = isOnCarousel;
		this.link = link;
		this.make = make;
		this.mainImage = mainImage;
		this.otherImages = otherImages;
	}
}
