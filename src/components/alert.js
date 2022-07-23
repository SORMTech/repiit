export default function Alert({ type, message }) {
  var color = ""
  if(type && type == 'success'){
    color = "bg-green-600"
  }else{
    color = "bg-red-600"
  } 
  
  return (
    <div className="fixed top-0 left-0 w-full grid place-items-center z-[9999999]">
      <div className={`mt-5 py-3 px-10 ${color} text-white`}>{message}</div>
    </div>
  )
}
