
function ErrorMessage({error}) {

  return (
    <div className="flex p-10">
        <div className="p-3 rounded-lg bg-red-700">
          <h3 className="text-white text-sm">Error: {error?.message}</h3>
        </div>
    </div>
  )
}

export default ErrorMessage