import { View, ViewProps } from "react-native";
import { twMerge } from "tailwind-merge";

// ViewProps 타입 : View 컴포넌트에 전달되는 속성들의 타입을 정의하는 인터페이스
function Card({ className, children, ...props }: ViewProps) {
    return (
        <View
            className={twMerge(
                ["p-8"],
                ["bg-background-paper", "border", "border-divider", "rounded-xl", "shadow-sm"],
                className,
            )}
            {...props}>
            {children}
        </View>
    );
}

export default Card;
