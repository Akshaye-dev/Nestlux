import { Skeleton } from "moti/skeleton";
import { Dimensions, View } from "react-native";

const screenWidth = Dimensions.get("window").width;
const horizontalPadding = 32; // 16 left + 16 right
const gap = 12;

const cardWidth = (screenWidth - horizontalPadding - gap) / 2;
export function PropertyCardSkeleton() {
  return (
    <View className="flex-1 justify-between mb-16 mt-10 ">
      <View className="flex-row justify-between items-center mb-4">
        <Skeleton colorMode="light" width={70} height={22} radius={8} />
        <Skeleton colorMode="light" width={90} height={22} radius={8} />
        <Skeleton colorMode="light" width={90} height={22} radius={8} />
      </View>

      <View className="flex-row justify-between items-center mb-2">
        <Skeleton colorMode="light" width={150} height={22} radius={8} />
        <Skeleton colorMode="light" width={50} height={12} radius={8} />
      </View>

      <View className="flex-row w-full">
        <View className="flex-1 mr-2 rounded-3xl overflow-hidden">
          <Skeleton
            colorMode="light"
            width={cardWidth}
            height={220}
            radius={16}
          />
        </View>

        <View className="flex-1 ml-2 rounded-3xl overflow-hidden">
          <Skeleton
            colorMode="light"
            width={cardWidth}
            height={220}
            radius={16}
          />
        </View>
      </View>
    </View>
  );
}
