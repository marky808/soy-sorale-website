interface NumberedDummyImageProps {
  number: string | number
  description: string
  width?: string
  height?: string
  className?: string
}

export const NumberedDummyImage = ({
  number,
  description,
  width = "w-full",
  height = "h-64",
  className = "",
}: NumberedDummyImageProps) => {
  return (
    <div
      className={`${width} ${height} bg-[#F8F8FF] border-2 border-dashed border-[#81D4E6] flex flex-col items-center justify-center rounded-lg ${className}`}
    >
      <div className="text-6xl font-bold text-[#81D4E6] mb-2">No.{number}</div>
      <div className="text-sm text-[#333333] text-center px-4 font-medium">{description}</div>
    </div>
  )
}
