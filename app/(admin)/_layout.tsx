import { Slot } from "expo-router";
import { ScrollView, View } from "react-native";
import { twMerge } from "tailwind-merge";
import AdminAsideDesktop from "@/components/layouts/admin/AdminAsideDesktop";

function AdminLayout() {
    // tailwind를 통해서 "반응형 디자인"을 적용 시키는 것은
    // 작은 화면부터 큰 화면으로 적용 시킴
    // sm: (640px)  | md: (768px) | lg: (1024px) | xl: (1280px)   형태로서 앞에 접두사를 붙임
    // flex-col md:flex-row    => 기본값으로 flex-direction: column이 적용 되지만
    //                            브라우저 크기가 768px이 넘으면 flex-direction: row로 적용 된다
    return (
        <View className={twMerge(["flex-1", "flex-col", "md:flex-row"])}>
            {/* hidden -> display: hidden   , flex -> display: flex */}
            {/* 화면이 작을 때(기본값)은 hidden이 적용될 것이고, 화면이 768px을 넘어가면 flex로 적용 */}
            <View className={twMerge("hidden", "md:flex", "h-full")}>
                <AdminAsideDesktop />
            </View>

            {/* TODO: 관리자용 모바일 메뉴 추가 */}

            <View className={"flex-1"}>
                <ScrollView
                    className={"flex-1"}
                    contentContainerClassName={"p-4 md:p-8 items-center"}
                    showsVerticalScrollIndicator={false}>
                    <View className={"w-full max-w-5xl"}>
                        <Slot />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default AdminLayout;
