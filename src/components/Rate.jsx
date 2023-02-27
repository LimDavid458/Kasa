export default function Rate({rating}) {
    let rateNumber = JSON.stringify({rating});
    rateNumber = Number(rateNumber.slice(11,12));
   
    return rateNumber === 5 ? (
      <div>
       ok
      </div>
    ) : (
        <div>ok</div>
    )

}