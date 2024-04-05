import Image from "next/image";

export default function SkitDisp(props) {
    const watch=()=>{
        props.watch()
    }
    const {skit}=props;
    const oldUrl=skit.url.split('.');
    const url =oldUrl[0]+"."+oldUrl[1]+"."+oldUrl[2]+".jpg";
    return(
     <div className="mb-5 block rounded-lg border border-gray-200
     shadow-md">
        <Image src={url} width={30} height={30} alt={skit.description}/>
        <p onClick={watch}>Watch</p>
     </div>
    )
};
