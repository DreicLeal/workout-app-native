import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {Entypo} from "@expo/vector-icons"

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg={"gray.500"} p={2} pr={4} alignItems={"center"} rounded={"md"} mb={2}>
        <Image
          source={{
            uri: "https://img.comunidades.net/fit/fitnessclubs/remada_m_quina_hammer.jpg",
          }}
          alt="Representação do exercício"
          w={16}
          h={16}
          rounded={"md"}
          mr={4}
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize={"lg"} color={"white"} fontFamily={"heading"}>
            Remada Unilateral
          </Heading>
          <Text fontSize={"sm"} color={"gray.200"} mt={1} noOfLines={2}>
            3x12 repetições
          </Text>
        </VStack>
        <Icon
        as={Entypo}
        name="chevron-thin-right"
        color={"gray.300"}
        />
      </HStack>
    </TouchableOpacity>
  );
}
