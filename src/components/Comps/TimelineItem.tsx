type TimelineItem = {
    number: string
    title: string
    description: string
    isLast?: boolean
}

export default function TimelineItem({
    number,
    title,
    description,
    isLast
}: TimelineItem) {
    return (
        <div className="flex gap-5 group">
            <div className="flex flex-col items-center">
                <div className="bg-[#EEF3FA] text-[#2E52A8] border-[1.5px] border-[#CAD8EC  ] w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors duration-200">{number}</div>
                {!isLast && <div className="bg-[#DDE8F5] min-h-6 w-px flex-1 my-1" />}
            </div>
            <div className={isLast ? "" : "pb-5"}>
                <div className="text-[#1C2B3D] font-heading font-semibold text-sm mb-0.5">{title}</div>
                <div className="text-[#6E85A0] text-sm">{description}</div>
            </div>
        </div>
    )
}
