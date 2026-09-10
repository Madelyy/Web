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
                <div className="bg-[#F3F5F6] text-[#1E6A8A] border-[1.5px] border-[#E0E7EA] w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors duration-200">{number}</div>
                {!isLast && <div className="bg-[#E0E7EA] min-h-6 w-px flex-1 my-1" />}
            </div>
            <div className={isLast ? "" : "pb-5"}>
                <div className="text-[#123B4A] font-heading font-semibold text-sm mb-0.5">{title}</div>
                <div className="text-[#78909C] text-sm">{description}</div>
            </div>
        </div>
    )
}
