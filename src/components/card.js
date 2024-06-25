const Card = ( {firstname , lastname ,    lang})=>{
    return(
        <div className="inline-block px-2 mb-4 inline-block min-w-[200px] px-2 mb-4 lg:min-w-[300px]"> {/* Adjusted class */}
        <div className="bg-white rounded shadow-lg p-6">
            <img src="https://via.placeholder.com/150" alt="teacher" className="w-full rounded mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2 max-w-[20px] ">{firstname +" "+ lastname }</h4>
            <p className="text-gray-600">{lang} Teacher</p>
        </div>
    </div>
    )

}

export default Card;