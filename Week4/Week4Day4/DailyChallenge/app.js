// Daily Challenge : Creating Objects

// Instructions


// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

// Instantiate a new Video instance and call the watch() method.

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
    }
}

let video1 = new Video('Interstellar', 'Bill', 10027);
// video1.watch();
let video2 = new Video('A Clockwork Orange', 'Stacey', 8220);
// video2.watch();

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

const videoDatabase = [
    {
        title: '"In Bruges"',
        uploader: 'Dan',
        time: 6420
    },
    {
        title: '"Home Alone"',
        uploader: 'Oleg',
        time: 6180
    },
    {
        title: '"Parasite"',
        uploader: 'John',
        time: 7860
    },
    {
        title: '"The Shawshank Redemption"',
        uploader: 'Kate',
        time: 8520
    },
    {
        title: '"Dune: Part One"',
        uploader: 'Lera',
        time: 9300
    },
]

videoDatabase.forEach(obj => {
    let { title, uploader, time } = obj;
    let video = new Video(title, uploader, time);
    video.watch();
})