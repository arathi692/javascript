// class Paragraph{
//     constructor(content){
//         this.paragraph = document.createElement('paragraph');
//         this.paragraph.innerHTML = content;
//         document.body.appendChild(this.paragraph);
//     }
//     set margin(margin){
//         this.paragraph.style.margin = margin + "px";

//     }

//     set padding(padding){
//         this.paragraph.style.padding = padding +"px";
//     }

//     get margin(){
//         return this.paragraph.style.margin;
//     }
//     get padding(){
//         return this.paragraph.style.padding;

//     }
// }

// let myParagraph = new Paragraph('once upon a time there lived a grandmom named alasandra she lived alone.her house was inside ajunglefghfgvbvvbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvggggggggggggggggggggggggggggggggghghghhhhhhhhhhkkkkkkk A short story is a piece of prose fiction that can typically be read in a single sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, tall tales, fables and anecdotes in various ancient communities around the world. The modern short story developed in the early 19th centuryA short story is a piece of prose fiction that can typically be read in a single sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, tall tales, fables and anecdotes in various ancient communities around the world. The modern short story developed in the early 19th centuryA short story is a piece of prose fiction that can typically be read in a single sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, tall tales, fables and anecdotes in various ancient communities around the world. The modern short story developed in the early 19th centuryA short story is a piece of prose fiction that can typically be read in a single sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, tall tales, fables and anecdotes in various ancient communities around the world. The modern short story developed in the early 19th century');

// console.log("myParagraph:",myParagraph);
// myParagraph.margin=300;
// myParagraph.padding=400;

// console.log("margin:",myParagraph.margin);
// console.log("padding:",myParagraph.padding);



    console.log("first line ...");
    console.log("second line ");
    setTimeout(()=>{
        console.log("callback function");
    },4000);
    setTimeout(()=>{
        console.log("call back function1");
    },5000);

    let datas= fetch('https://jsonplaceholder.typicode.com/users');
    console.log("datas:",datas);
    console.log("third line..");

    //synchronous single threaded language:line by line execution of programs
    //callstack
    //microstack queue
    //call back queue
    //web space environment
    //asynchronous operation 



    console.log("\n\n\nAjax..");
    let xhr = new XMLHttpRequest();
    let btn= document.getElementById('btn');

    xhr.open("get",'https://jsonplaceholder.typicode.com/users');
    btn.addEventListener('click',()=>{
        xhr.send();

    })

    //get
    //post
    //put
    //delete
    console.log("xhr response:",xhr);
    xhr.onreadystatechange = function (){
        console.log("readyState:",xhr.readyState);

        let content = document.getElementById('content');
        console.log("content:",content);
        let datas = '';


        if(xhr.readyState==4){

            if(xhr.status == 200){

           
            console.log("response:",xhr.response);
            console.log("type of response:",typeof(xhr.response));

            let parsed_response=JSON.parse(xhr.response);
            console.log("parsed_response:",parsed_response);
            console.log("type of parsed_response:",typeof(parsed_response));

            for(let i=0;i<parsed_response.length;i++){
                datas = datas + `<tr>
                <td>${parsed_response[i].id}</td>
                <td>${parsed_response[i].name}</td>
                <td>${parsed_response[i].username}</td>
                <td>${parsed_response[i].website}</td>
                </tr>`;
            }
            content.innerHTML = datas;
        }else{
            console.log("request failed");
        }
 }else{
    console.log("state not completed")
 }
    }

    