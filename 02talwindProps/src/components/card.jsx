
export default function Card({Name, price="Not for sale"}) {
    console.log(Name);

    return (
        <>
        <div className="flex flex-col align-middle justify-center rounded-xl  p-4 "
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div className='flex align-middle justify-center'>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="100"
            height="100"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{Name}</h1>
            <h1 className="font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
        </>
    )
}