const patientDetails = () => {
    return (
        <>
         <div className="py-8 flex flex-col items-center">
                       <h3 className="text-center">How old are you?</h3>
                       <p className="text-gray-500 text-base font-bold text-center">
                       Pleaase provide patient’s email address in the text box below
                        </p>

                       <div>
                        <input
                           type="email"
                          placeholder="Enter email address"
                          className="shadow-md focus:outline-none rounded-lg p-4 placeholder:text-gray-500 placeholder:text-lg placeholder:font-normal"/>
                       </div>
         </div>
        </>
    )
}
export default patientDetails;