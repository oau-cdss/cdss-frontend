import { useState } from "react"

const SessionQuestion = () => {
    const [openQuestion, setOpenQuestion] = useState(false)
    return (
        <div>
            <h3 className="text-3xl font-semibold">
                Session Questions
            </h3>

            <div>
                <div className="border py-2 shadow-md">
                    <div className="flex justify-between items-center px-2">
                    <p className="text-base font-normal text-[#03021b]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi!
                    </p>
                    <p onClick={
                        () => {
                            setOpenQuestion(!openQuestion)}
                        }
                        >&gt;</p>
                    </div>

                    {openQuestion && <div className="px-4">
                        <p className="text-base font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Praesentium repudiandae sint cupiditate ab fuga! 
                            Quod laudantium, dolorum molestiae nihil eveniet consequatur quo blanditiis eos numquam!
                        </p>
                    </div>}
                </div>

                
            </div>
        </div>
    )
}
export default SessionQuestion