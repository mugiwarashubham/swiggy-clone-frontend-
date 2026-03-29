export default function DineCard({Restdata}){


    return (
        <div className="max-w-sm flex-none rounded-2xl">
       <a target="_blank" href={Restdata.cta.link}>
        <div className="relative">
          <img
            className="w-80 h-50 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              Restdata?.info?.mediaFiles[0]?.url
            }
            alt="Restaurant"
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
          <p className="absolute bottom-2 left-2 text-xl text-white z-10">
            {Restdata.info.name}
          </p>
          <p className="absolute bottom-2 right-2 text-xl text-white z-10">
            {Restdata?.info?.rating?.value}
          </p>
        </div>
        </a>
      </div>
      
    )

}