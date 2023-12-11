class Paragraph{
    constructor(content){
        this.paragraph = document.createElement('paragraph');
        this.paragraph.innerHTML = content;
        document.body.appendChild(this.paragraph);
    }
    set margin(margin){
        this.paragraph.style.margin = margin + "px";

    }

    set padding(padding){
        this.paragraph.style.padding = padding +"px";
    }

    get margin(){
        return this.paragraph.style.margin;
    }
    get padding(){
        return this.paragraph.style.padding;

    }
}

let myParagraph = new Paragraph('once upon a time there lived a grandmom named alasandra she lived alone.her house was inside ajunglefghfgvbvvbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvggggggggggggggggggggggggggggggggghghghhhhhhhhhhkkkkkkk A short story is a piece of prose fiction that can typically be read in a single sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, tall tales, fables and anecdotes in various ancient communities around the world. The modern short story developed in the early 19th centuryA short story is a piece of prose fiction that can typically be read in a single sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, tall tales, fables and anecdotes in various ancient communities around the world. The modern short story developed in the early 19th centuryA short story is a piece of prose fiction that can typically be read in a single sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, tall tales, fables and anecdotes in various ancient communities around the world. The modern short story developed in the early 19th centuryA short story is a piece of prose fiction that can typically be read in a single sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, tall tales, fables and anecdotes in various ancient communities around the world. The modern short story developed in the early 19th century');

console.log("myParagraph:",myParagraph);
myParagraph.margin=300;
myParagraph.padding=400;

console.log("margin:",myParagraph.margin);
console.log("padding:",myParagraph.padding);


