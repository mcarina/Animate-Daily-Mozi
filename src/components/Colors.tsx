"use client"

export default function Colors ({ onColorChange }: ColorPickerProps){

    const pastelColors = [
        { value: "#f8edeb" },
        { value: "#d0e8f2" },
        { value: "#d8f3dc" },
        { value: "#fcf6bd" },
        { value: "#e0c3fc" },
    ]

    return(
        <section className="space-y-2">
            <div className="grid grid-cols-5 gap-1 w-80 h-65">
                {pastelColors.map((color) => (
                <button
                    key={color.value}
                    onClick={() => onColorChange(color.value)}
                    className="w-full aspect-square rounded-md border border-gray-200 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ backgroundColor: color.value }}
                />
                ))}
            </div>    
        </section>
    )
};