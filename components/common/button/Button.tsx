import { Pressable, PressableProps, Text } from "react-native";
import { BUTTON_SIZE_STYLE, StyleColorType, StyleSizeType, StyleVariantType } from "@/types/style";
import { twMerge } from "tailwind-merge";

interface Props extends PressableProps {
    // 앞으로 Button 컴포넌트를 사용할 때 전달 받아야 되는 데이터 명세를 작성할건데,
    // 그건 PressableProps(Pressable이 전달받아야 되는 데이터 명세)를 그대로 받아서
    // 덧붙이겠다.
    color?: StyleColorType;
    variant?: StyleVariantType;
    size?: StyleSizeType;
    fullWidth?: boolean;
}

function Button({
    color = "primary",
    variant = "contained",
    size = "medium",
    fullWidth = false,
    className,
    children,
    ...props
}: Props) {
    // 버튼 모양에 대해서 결정짓는 클래스들을 뱉어주는 함수
    const getVariantClasses = () => {
        switch (variant) {
            case "contained":
                return `bg-${color}-main`;
            case "outlined":
                return `border border-${color}-main bg-transparent`;
            case "text":
                return `bg-transparent`;
            case "icon":
                return `rounded-full p-2`;
        }
    };

    // 버튼 위에 올라가는 글자에 대한 색상을 결정짓는 함수
    const getTextColorClasses = () => {
        if (variant === "contained") return `text-${color}-contrast`;
        return `text-${color}-main`;
    };

    return (
        <Pressable
            className={twMerge(
                "flex justify-center items-center rounded-md font-bold",
                BUTTON_SIZE_STYLE[size],
                getVariantClasses(),
                getTextColorClasses(),
                fullWidth ? "w-full" : "",
                className,
            )}
            {...props}>
            {typeof children === "string" ? (
                <Text
                    className={twMerge(
                        "font-bold text-sm",
                        getTextColorClasses(),
                        size === "small" ? "text-xs" : size === "large" ? "text-base" : "text-sm",
                    )}>
                    {children}
                </Text>
            ) : (
                children
            )}
        </Pressable>
    );
}

export default Button;
