import { GradientContainer, GradientCircle, GradientTitle } from "./GradientChipStyles"

type TGradientChipType = {
    main: string;
    title: string;
    margin?: string;
    padding?: string; 
    width?:string;
    height?:string;
    fontFamily?:string;
}


const GradientChip = ({ main, title, margin, padding, width, height, fontFamily }: TGradientChipType) => {
    return (
        <GradientContainer margin={margin} padding={padding}>
            <GradientCircle
                width={width}
                height={height}
                fontFamily={fontFamily}
                padding={padding}
                >
                <span>{main}</span>
            </GradientCircle>
            <GradientTitle>
                {title}
            </GradientTitle>
        </GradientContainer>
    );
}

export default GradientChip;