import { MoveRightIcon } from "lucide-react";

type Prop = {
    title: string;
}

const SectionHeader = ({ title }: Prop) => {
    return (
        <div className="flex items-center justify-between border-l-4 border-[#5d91f7] h-[45px]">
            <p className="pl-2 text-sm sm:text-base">{title}</p>
            <div className="flex-1 px-5">
                <hr />
            </div>
            <a className="flex items-center gap-2 text-[#5d91f7] cursor-pointer text-sm sm:text-base">
                <p>View all</p> <MoveRightIcon />
            </a>
        </div>
    )
}

export default SectionHeader;