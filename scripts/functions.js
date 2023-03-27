/******************************************************************************* */
// Library functions
/******************************************************************************* */
//library array
let myLibrary=[];

/**
 * Book object constructor
 * @param {*} title 
 * @param {*} author 
 * @param {*} pages 
 * @param {*} read 
 */
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read; 
}
/**
 * Getting book info
 * @returns string with book info
 */
Book.prototype.info=function(){
    let stringLocal="";
    if(this.read===true){
        stringLocal="read.";
    }
    else{
        stringLocal="not read yet.";
    }
    return this.title +" by "+this.author+", "+this.pages+" pages, "+stringLocal
}
/**
 * Getting book title
 * @returns string with book title
 */
Book.prototype.getTitle=function(){
    
    return this.title 
}
/**
 * writes false in book.read property
 */
Book.prototype.resetRead=function(){
    this.read=false;
}
/**
 * writes true in book.read property
 */
Book.prototype.setRead=function(){
    this.read=true;
}
/**
 * writes true in book.read property
 */
Book.prototype.getRead=function(){
    return this.read;
}
/**
 * writes true in book.author property
 */
Book.prototype.getAuthor=function(){
    return this.author;
}
/**
 * writes true in book.pages property
 */
Book.prototype.getPages=function(){
    return this.pages;
}
/**
 * adds a book to the library array
 * @param {*} Library : library array that stores books
 */
Book.prototype.addBookToLibrary=function(Library){
    Library.push(this);
}
/**
 * function that prints in console the books stored in the array
 * @param {*} library 
 */
const showLibrary=function(library){
    library.forEach(element => {
        console.log(element.info());
    });
}

/******************************************************************************* */
// DOM manipulation functions
/******************************************************************************* */


/**
 * function that shows in the page each book
 * @param {*} library 
 */
const showLibraryPage=function(library){
    let mainBlock = document.getElementById("bookContainer");
    let content=" "//erasing previous content
    content="<div><ul class='ulBooks'>"
    let index=0;
    library.forEach(element => {
        console.log(element.info());
        content+="<li class='liBooks'>"
        //content+="<p class='pBooks'>"+element.info()+"</p>"
        content+="<p class='pBooks'>Author: "+element.getAuthor()+"</p>"
        content+="<p class='pBooks'>Title: "+element.getTitle()+"</p>"
        content+="<p class='pBooks'>Pages: "+element.getPages()+"</p>"
        content+="<div class='buttons'>"
        content+="<button class='pButton' id='erase_"+index+"'>Erase</button>"
        if(element.getRead()==false)
        {content+="<button class='pButton' id='read_"+index+"'>Read</button>"}
        else
        {content+="<button class='pButton' id='unRead_"+index+"'>unRead</button>"}
        content+="</div>";
        content+="</li>";
        index++;    
    });
    content+="</ul></div>";       
    mainBlock.innerHTML=content;
    //adding listeners
    for (let d=0;d<index;d++)
    {
     let localErase=document.getElementById("erase_"+d);
        localErase.addEventListener("click",()=>{    
                console.log("clicked: erase_"+d)
            })            
    
    let localRead=document.getElementById("read_"+d);
    if(localRead!=null)
    {
    
        localRead.addEventListener("click",()=>{    
                console.log("clicked: read_"+d)
                myLibrary[d].setRead();
                showLibraryPage(myLibrary);
            })            
    }    

    let localUnRead=document.getElementById("unRead_"+d);
    if(localUnRead!=null)
    {
        localUnRead.addEventListener("click",()=>{    
            console.log("clicked: unRead_"+d)
            myLibrary[d].resetRead();
            showLibraryPage(myLibrary);
        })                    
    }
    

    }        

}

const openForm=function(){
    let bookForm = document.getElementById("bookForm");
    let content=" ";//erasing previous content
    content="<form name='newbook' class='myForm'  id='bookFormT'>"
    content+="<label for='bookTitle'>Book Title:</label>"
    content+="<input type='text' id='bookTitle' placeholder='title'></input>";
    content+="<label for='author'>Author:</label>"
    content+="<input type='text' id='author' placeholder='author'></input>";
    content+="<label for='pages'>Number of Pages:</label>"
    content+="<input type='text' id='pages' placeholder='0'></input>";
    content+="<div class='buttons'>";
    content+="<button class='formButton' id='submitButton' type='submit'>Add</button>";
    content+="<button class='formButton' id='cancelButton' type='cancel'>Cancel</button>";
    content+="</div></form>";
    bookForm.innerHTML=content;
    

    let submitButton=document.getElementById("submitButton");
    submitButton.addEventListener("click",()=>{    
        getInformation();        
        closeForm();
    })
    let cancelButton=document.getElementById("cancelButton");
    cancelButton.addEventListener("click",()=>{
        console.log("canceling")
        closeForm();
    });
}

const getInformation=function(event){    
    console.log("here")       
    let title = (document.getElementById("bookTitle")).value;
    let author = (document.getElementById("author")).value;
    let pages = (document.getElementById("pages")).value;

    console.log("new title:"+title)
    const mybook= new Book(title,author,pages,false);
    mybook.addBookToLibrary(myLibrary);  
    showLibrary(myLibrary);
    showLibraryPage(myLibrary);    
}

const closeForm=function(){
    let bookForm = document.getElementById("bookForm");
    let content=" ";//erasing previous content
    
    bookForm.innerHTML=content;
}

const buttonOnClick=function(){    
    openForm();
}

/******************************************************************************* */
// running functions
/******************************************************************************* */


const mybook= new Book("The shinning","King",1500,false);
const mybook2= new Book("Doctor Sleep","King",1200,false);
const mybook3= new Book("The Bible","Various",10200,false);
const mybook4= new Book("The Metamorphosis","Kafka",500,false);
const mybook5= new Book("Fausto","Goethe",10200,false);

mybook.addBookToLibrary(myLibrary);
mybook2.addBookToLibrary(myLibrary);
mybook3.addBookToLibrary(myLibrary);
mybook4.addBookToLibrary(myLibrary);
mybook5.addBookToLibrary(myLibrary);



showLibraryPage(myLibrary);
