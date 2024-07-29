import { Tag } from "./Tag";

const DefaultImg ="https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUrT8bOmxBsOcf1d-TlAK-3XMy1KqzU8~yZv7KptQSdolnoVynbyVxw~YpYy2bNmtTJ5F1k~9yPtxdDQyFssbKLhOaE7OvtTDGZuNpwCJb4aI1RZKnBRTwqndwEQCIALW0gBLNIgD0Le2bIo~c2Nk8yWtXkJFCO2BIVOH4JncHxEFtHDNS4XJ6O~EUnBZWekxyaixJ9I7lmQmMnLVuO0tO85HktNLPl0DvUzegDJertyN4YbaazuEvysLxB1-MEMZ1pqXsuLAzfU~pFmPRFZ1tamM3aNAvO32vjLo2OjDIUQ2FATffguuEccei0IvXfQwGahithoKl~HyXxhn14ltA__";
export const TrendingTwo =( {image = DefaultImg, title = "The Impact of Technology on the Workplace: How Technology is Changing", category = "Technology"})=>{
    return(
<div className= "min-w-[289px] max-w-[289px] min-h-[320px] flex flex-shrink-0 flex-col justify-end rounded-xl px-[29.5px] pb-7 relative bg-[#141624] bg-opacity-40">
    <img src={image} className="absolute -z-10 min-w-[289px] max-w-[289px] min-h-[320px] rounded-xl left-0 top-0 object-cover "/>
  <div className="flex flex-col gap-4">
  <Tag tag={category}/>
  <p className="text-lg font-semibold text-white py-4 px-4">{title}</p> 
  </div>
</div>

    )
}