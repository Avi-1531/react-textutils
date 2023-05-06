import React from 'react'

export default function Alert(props) {
  return (
   
   props.alert && <div
  className="mb-3 hidden w-full items-center rounded-lg bg-blue-400 px-6 py-5 text-base text-warning-800 data-[te-alert-show]:inline-flex"
  role="alert"
  data-te-alert-init=""
  data-te-alert-show=""
>
 <strong> {props.alert.type}</strong> :{props.alert.msg}
  <button
    type="button"
    className="ml-auto box-content rounded-none border-none p-1 text-warning-900 opacity-50 hover:text-warning-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
    data-te-alert-dismiss=""
    aria-label="Close"
  >
  
  </button>
</div>

    
  )
}
