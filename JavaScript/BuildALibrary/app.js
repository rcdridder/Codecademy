class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    getAverageRating() {
        let sum = 0;
        this._ratings.forEach(f => sum += f);
        if(this._ratings.length === 0)
            return 'No Ratings yet.';
        else
            return Math.floor(sum / this._ratings.length);
    }

    addRating(rating) {
        this._ratings.push(rating);
    }

    toggleCheckoutStatus() {
        if(this._isCheckedOut)
            this._isCheckedOut = false;
        else
            this._isCheckedOut = true;
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title) {
        super(title);
        this._director = director;
    }

    get director() {
        return this._director;
    }
}

class CD extends Media {
    constructor(artist, title) {
        super(title);
        this._artist = artist;
    }

    get artist() {
        return this._artist;
    }
}
