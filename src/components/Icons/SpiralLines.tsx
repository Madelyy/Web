export default function SpiralLines() {
    return (
        <svg
            className="absolute right-0 top-0 opacity-5"
            width="600"
            height="600"
            viewBox="0 0 600 600"
            fill="none"
        >
            <circle cx="300" cy="300" r="280" stroke="white" strokeWidth="1" />
            <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="1" />
            <circle cx="300" cy="300" r="120" stroke="white" strokeWidth="1" />
            <line
                x1="0"
                y1="300"
                x2="600"
                y2="300"
                stroke="white"
                strokeWidth="1"
            />
            <line
                x1="300"
                y1="0"
                x2="300"
                y2="600"
                stroke="white"
                strokeWidth="1"
            />
            <line
                x1="82"
                y1="82"
                x2="518"
                y2="518"
                stroke="white"
                strokeWidth="0.5"
            />
            <line
                x1="518"
                y1="82"
                x2="82"
                y2="518"
                stroke="white"
                strokeWidth="0.5"
            />
        </svg>
    )
}