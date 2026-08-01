import { Skeleton } from "moti/skeleton";
import { View } from "react-native";

export function FeaturedSkeleton() {
  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-center mb-2">
        <Skeleton colorMode="light" width={150} height={22} radius={8} />
        <Skeleton colorMode="light" width={50} height={12} radius={8} />
      </View>

      <View className="flex-row gap-4 ">
        <Skeleton colorMode="light" width={220} height={160} radius={16} />

        <Skeleton colorMode="light" width={220} height={160} radius={16} />
      </View>
    </View>
  );
}
