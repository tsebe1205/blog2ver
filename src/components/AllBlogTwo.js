import { Tag } from "./Tag"
const DefaultImg ="https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUrT8bOmxBsOcf1d-TlAK-3XMy1KqzU8~yZv7KptQSdolnoVynbyVxw~YpYy2bNmtTJ5F1k~9yPtxdDQyFssbKLhOaE7OvtTDGZuNpwCJb4aI1RZKnBRTwqndwEQCIALW0gBLNIgD0Le2bIo~c2Nk8yWtXkJFCO2BIVOH4JncHxEFtHDNS4XJ6O~EUnBZWekxyaixJ9I7lmQmMnLVuO0tO85HktNLPl0DvUzegDJertyN4YbaazuEvysLxB1-MEMZ1pqXsuLAzfU~pFmPRFZ1tamM3aNAvO32vjLo2OjDIUQ2FATffguuEccei0IvXfQwGahithoKl~HyXxhn14ltA__";

export const AllBlogTwo =({image = DefaultImg, title = "The Impact of Technology on the Workplace: How Technology is Changing", category = "Technology", date="August 20, 2028"})=>{
    return(
        <div className="min-w-[392px] max-w-[392px] p-4 flex flex-col justify-center items-center gap-4 rounded-xl border-[1px] border-solid border-[#E8E8EA] ">
        <div className="flex flex-col gap-4 px-4 py-4">
        <img src={image} className="min-w-[360px] max-w-[360px] min-h-[240px] rounded-md"/>
          <Tag tag={category}/>
          <p>{title}</p>
          <p>{date}</p>
        </div>
      </div>
    )
}