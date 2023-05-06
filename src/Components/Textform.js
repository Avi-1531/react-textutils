import React, { useState } from 'react'

export default function Textform(props) {

  const nameadd = (event) => {
    // onclick function return a event 
    console.log("more letters added in my textarea")
    settext(event.target.value)
    // console.log(event.target.value)
    // it is just like settext =text+newtext entered by user 
  }

  const textupper = () => {
    console.log("uppercase btutwas clicked " + text)
    let newtext = text.toUpperCase();
    settext(newtext)
    props.showalert("UpperCase Function is Running ","Success")


  }
  const textlower = () => {
    console.log("lowercase btutwas clicked " + text)
    let newtextlower = text.toLowerCase();
    settext(newtextlower)
    props.showalert("LowerCase Function is Running ","Success")
  }
  const textclear = () => {
    console.log("textclear btutwas clicked " + text)
    settext("")
    props.showalert("Clear Function is Running ","Success")

  }
    const [text, settext] = useState(" ")
//   const [element, setelement] = useState(null);

//   let mytext = text
//   let arr = mytext.split("")

//   const textundo = () => {
//     let popelement = arr.pop();
//     console.log("my undo or popeed element is " + popelement)
//     settext(arr.join(""))
//     setelement(popelement)
//   }


//   const textredo = () => {
// // extra work for redo 
// var myint=element;
// var intArr = Array.from(String(myint))
// console.log(intArr)


//     let newarr = arr.concat(element)
//     console.log(newarr)
//     settext(newarr.join(""))
//   }
//   const handleundoclick = () => {
//     console.log("my handle undo click is working ")
//     textundo();


//   }
//   const handleredoclick = () => {
//     console.log("my redo handlebar is working")
//     textredo()
// }
  // text="gslhgd" wrong way of making the text get set to the variable in react
  // settext("sblksdjs") correct way to change the state settext is the function joh text ki value mein change krta hai now if we handle any event like nameadd we can settext the value enetered by user to the previous text



  const [poppedElements, setPoppedElements] = useState([]);
    const [element, setelement] = useState(null);

  let mytext = text
  let arr = mytext.split("")

  const textundo = () => {
    let popelement = arr.pop();
    console.log("my undo or popped element is " + popelement)
    settext(arr.join(""))
    setelement(popelement);
    setPoppedElements([...poppedElements, popelement]); // add the popped element to the poppedElements array
  }
  
  const textredo = () => {
    console.log("my redo is running " + text);
    let newarr = [...arr, element];
    console.log(newarr);
    settext(newarr.join(""));
  };

  const countwords=(text)=>{
    let countarr=text.split(" ");
    let popele=countarr.pop();
    // console.log(popele)

    return countarr.length
  }
  
  
  const handleredoclick = () => {
    // do something with the element to redo
    const lastPoppedElement = poppedElements.pop(); // get the last popped element from the poppedElements array
    setelement(lastPoppedElement); // set the last popped element as the current element
    textredo(); // call the textredo function to update the text
    setPoppedElements(poppedElements.slice(0, -1)); // remove the last element from the poppedElements array
    props.showalert("Redo Function is Running ","Success")
  };
  
    const handleundoclick = () => {
    console.log("my handle undo click is working ")
    textundo();
    props.showalert("Undo Function is Running ","Success")


  }
  

  return (
    <>
      <div className="container flex justify-center items-center m-14 flex-col">
        <h1 className="text-4xl m-4">{props.heading}</h1>
        <form className="w-full max-w-sm">
        
          <div className="relative mb-3" data-te-input-wrapper-init="">
            <textarea
              className="peer block min-h-[auto] w-full rounded border-0 text-black bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1"
              rows={10}
              
              placeholder="Your message"
              onChange={nameadd}
              value={text}
            />
            <label
              htmlFor="exampleFormControlTextarea1"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >

            </label>
          </div>
          <h1 className="score">{countwords(text)} words and {text.length}characters</h1>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="">
              <button
                className="shadow bg-purple-500 m-3 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button" onClick={textupper}
              >
                Uppercase
              </button>
              <button
                className="shadow bg-purple-500 m-3 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button" onClick={textlower}
              >
                LowerCase
              </button>
              <button
                className="shadow bg-purple-500 m-3 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button" onClick={textclear}
              >
                Clear
              </button>
              <button
                className="shadow bg-purple-500 m-3 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button" onClick={handleundoclick}
              >
                Undo
              </button>
              <button
                className="shadow bg-purple-500 m-3 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button" onClick={handleredoclick}
              >
                Redo
              </button>
            </div>
          </div>
        </form>
      </div>



    </>
  )
}
