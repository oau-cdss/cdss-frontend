import { useSession } from "../../../context/sessionContext";

const PatientDetails = () => {
    const { patientEmail, setPatientEmail } = useSession();
  
    return (
      <>
        <div className="py-8 flex flex-col items-center">
          <div className="mb-14">
            <h3 className="text-center text-4xl font-semibold mb-2 text-gray-600">
              Patient’s Email Address
            </h3>
            <p className="text-gray-500 text-base font-bold text-center">
              Please provide patient’s email address in the text box below
            </p>
          </div>
  
          <div className="w-full flex justify-center mb-40">
            <input
              type="email"
              aria-label="Enter email address"
              placeholder="Enter email address"
              value={patientEmail}
              onChange={(e) => {
                setPatientEmail(e.target.value);
              }}
              className="w-3/4 shadow-md focus:outline-none rounded-lg p-4 placeholder:text-gray-500 placeholder:text-lg placeholder:font-normal"
            />
          </div>
        </div>
      </>
    );
  };
  
  export default PatientDetails;
  