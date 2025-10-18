import "./SectionHeader.scss";
import { MoveRightIcon } from "lucide-react";

type Prop = {
    title: string;
}

const SectionHeader = ({ title }: Prop) => {
    return (
        <div className="sectionHeader">
            <p>{title}</p>
            <div className="sectionHeaderMiddle">
                <hr />
            </div>
            <a className="sectionHeaderRight">
                <p>View all</p> <MoveRightIcon />
            </a>
        </div>
    )
}

export default SectionHeader;