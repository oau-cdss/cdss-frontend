const CustomerReview = ({content, name}) => {
    return (
        <div className="max-w-96 mx-auto ">
          <p className="font-semibold text-lg text-center mb-4"> { /*cormorant garmarond*/}
            {content}
        </p> 
        <p className="text-center text-xl font-medium mt-4">{/*sf display pro*/}
            {name}
        </p>

        </div>
    )
}
export default CustomerReview;