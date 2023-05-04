

function RealisationCard({title, body}) {
  return (
    <div className="p-4 sm:p-10 rounded-2xl shadow-xl border border-b-primarycolor">
        <h3 className="text-primarycolor font-semibold mb-4">{title}</h3>
        <p>{body}</p>
    </div>
  )
}

export default RealisationCard